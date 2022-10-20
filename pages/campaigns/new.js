import React, {Component} from "react";
import Layout from "../../components/Layout";
import { Form, Button, Input, Message} from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component {
  state = {
    minimumContribution: '',
    errorMessage: '',
    loading: false
  };

  // Define the function we want to trigger when the form is submitted
  onSubmit = async (event) => {
    // Prevent browser from sending the form to server by default
    event.preventDefault();

    // Set loading flag to show the user the program is being executing, reset the error message
    this.setState({ loading: true, errorMessage: '' });

    try {
      // Get the list of accounts from web3 interface
      const accounts = await web3.eth.getAccounts();
      // Create a new campaign use the function in `factory` contract
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0]
        });

      // After campaign is successfully created, redirect the user to the root page
      Router.pushRoute('/');
    } catch(err) {
      this.setState({errorMessage: err.message});
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Create a Campaign</h3>
        {/* Only show the red error box when an error occurs */}
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input label='wei' 
              labelPosition="right" 
              // bind Input object value to component state
              value={this.state.minimumContribution}
              // event handler
              onChange={event => this.setState({minimumContribution: event.target.value})}
            />
          </Form.Field>

          {/* Display error message if an error occurs, hide the red box when no error occurs*/}
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>Create</Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;