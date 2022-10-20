import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

// Export a local instance of the deployed CampaignFactory contract
// And then, other files inside the project can access the instance
const instance = new web3.eth.Contract(
  // Interface to the deployed contract
  JSON.parse(CampaignFactory.interface),
  // Address of the deployed contract
  '0x5c4d352D201C4Ee0a5224E465713d77a8CFD4f2C'
);

export default instance;