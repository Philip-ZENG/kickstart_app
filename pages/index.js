// Root routing page
import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
// Import the local instance of the factory contract
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

// Define an react component
// With the Next.js, react app is rendered at the Next server first, and then finish its rendering at the browser
// So it makes the rendering process on the browser much faster
class CampaignIndex extends Component {
  // Life cycle function that will be called when the component is created in Next Server
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns: campaigns };
  }

  renderCampaigns() {
    // An array of card objects, each address in the `campaigns` array will be used to create a card
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: (
          // pass a dynamic variable to the router url
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  };

  // Content that will be displayed/rendered on the page
  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <Link route="/campaigns/new">
            <a>
              <Button floated="right" content='Create Campaign' icon='add' primary={true} />
            </a>
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  };
};

export default CampaignIndex;
