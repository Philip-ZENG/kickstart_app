import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import createCampaignInterface from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import {Router} from '../routes';

class ContributeForm extends Component {
  state = {
    value: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async (event) => {
    // Prevent browser from sending the form to server by default
    event.preventDefault();

    // Get an interface towards the campaign
    const campaign = createCampaignInterface(this.props.address);

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      // Make a contribution to the campaign
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')
      });

      // Refresh/update the page by rerouting to the current page
      Router.replaceRoute(`/campaigns/${this.props.address}`);
    } catch(err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({loading: false, value: ''});

  }

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input 
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
            label="ether"
            labelPosition='right'
          />
        </Form.Field>
        <Message error header="Oops!" content={this.state.errorMessage}/>
        <Button primary loading={this.state.loading}>
          Contribute
        </Button>
      </Form>
    );
  }
}

export default ContributeForm;