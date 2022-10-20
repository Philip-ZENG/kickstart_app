const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

// set up provider section of our contract (which account to use and which network the contract should be deplpyed to)
// Delpoy our contract through a infura node which is already connected to the ethereum network
const provider = new HDWalletProvider(
  'budget december more escape voyage category input thought finger whip tired total',
  'https://goerli.infura.io/v3/bd49d408ba5f4261b8ec5a596649f811'
);

const web3 = new Web3(provider);

// Deploy the contract to the real test network
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  // Create an instance of our contract and deploy it to the ethereum network
  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log(compiledFactory.interface);
  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};

deploy();