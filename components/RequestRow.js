import React, {Component} from "react";
import {Table, Button} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import createCampaignInterface from "../ethereum/campaign";
import {Router} from '../routes';

class RequestRow extends Component {
  onApprove = async () => {
    const campaign = createCampaignInterface(this.props.address);

    const accounts = await web3.eth.getAccounts();
    // Call the `approveRequest` method from the smart contract
    await campaign.methods.approveRequest(this.props.id).send({
      from: accounts[0]
    });

    // Reload the page
    Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
  };

  onFinalize = async () => {
    const campaign = createCampaignInterface(this.props.address);

    const accounts = await web3.eth.getAccounts();
    // Call the `finalizeRequest` method from the smart contract
    await campaign.methods.finalizeRequest(this.props.id).send({
      from: accounts[0]
    });
  };

  render() {
    const { Row, Cell } = Table;
    const { id, request, approversCount } = this.props;
    const readyToFinalize = request.approvalCount > approversCount / 2;
    
    return (
      <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
        <Cell>{ id }</Cell>
        <Cell>{ request.description }</Cell>
        <Cell>{ web3.utils.fromWei(request.value,'ether')}</Cell>
        <Cell>{ request.recipient }</Cell>
        <Cell>{ request.approvalCount } / {approversCount}</Cell>
        <Cell>
          {/* Hide the button if the request has been finalized */}
          {request.complete ? null: (
            <Button color='green' basic onClick={this.onApprove}>Approve</Button>
          )}
        </Cell>
        <Cell>
          {request.complete ? null: (
            <Button color="teal" basic onClick={this.onFinalize}>Finalize</Button>
          )}
        </Cell>
      </Row>
    );
  }
}

export default RequestRow;