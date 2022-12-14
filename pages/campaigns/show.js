import React, {Component} from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import Layout from '../../components/Layout';
// Function to create a interface of a specific campaign
import createCampaignInterface from '../../ethereum/campaign';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    // Get the address of the campaign that should be shown on this page from the url
    const campaign = createCampaignInterface(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    // console.log(summary);

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    // Extract the data we obtain from `getInitialProps`
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description: 'The manager created this campaign, and can create requests to withdraw money.',
        style: {overflowWrap: 'break-word'}
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description: 'You must contribute at least this much wei to become a contributor.'
      },
      {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers.'
      },
      {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Number of people who have already donated to the campaign.'
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description: 'Balance is how much money this campaign has left to spend.'
      }
    ];

    return <Card.Group items={items}/>
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              {this.renderCards()}
            </Grid.Column>

            <Grid.Column width={6}>
              <ContributeForm address={this.props.address}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary>View Requests</Button>
                </a>
              </Link>
              </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;