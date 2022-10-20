import React, {Component} from "react";
import { Button, Table } from "semantic-ui-react";
import {Link} from '../../../routes';
import Layout from "../../../components/Layout";
import createCampaignInterface from "../../../ethereum/campaign";
import RequestRow from "../../../components/RequestRow";

class RequestIndex extends Component {
  static async getInitialProps(props) {
    // Retrieve address from URL
    const {address} = props.query;
    const campaign = createCampaignInterface(address);
    const requestsCount = await campaign.methods.getRequestCount().call();
    const approversCount = await campaign.methods.approversCount().call();

    // Get all the requests of a specific campaign from the smart contract as a list
    const requests = await Promise.all(
      Array(parseInt(requestsCount))
        .fill()
        .map((element, index) => {
          return campaign.methods.requests(index).call()
        })      
    );

    return {address: address, requests: requests, requestsCount: requestsCount, approversCount: approversCount};
  }

  renderRows() {
    // Create and return a row for each of the request in the requests array
    return this.props.requests.map((request, index) => {
      return (
        <RequestRow 
          key={index}
          id={index}
          request={request}
          address={this.props.address}
          approversCount={this.props.approversCount}
        />
      );
    });
  }

  render() {
    // Destructuring of the table components
    const {Header, Row, HeaderCell, Body} = Table;

    return (
      <Layout>
        <h3>Reuests List</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary floated="right" style={{ marginBottom: 10 }}>Add Request</Button>
          </a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Approval Count</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>
            {this.renderRows()}
          </Body>
        </Table>
        <div>Found {this.props.requestsCount} requests. </div>
      </Layout>
    );
  }
}

export default RequestIndex;