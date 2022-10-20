const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

// Get the path to the `build` folder under the `contract` directory
const buildPath = path.resolve(__dirname,'build');
// Remove everything inside the `build` folder and the folder itself
fs.removeSync(buildPath);

// Get the path to the `Campaign.sol` contract file
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
// console.log("Campaign Path", campaignPath);

// Retrieve the contract source code
const source = fs.readFileSync(campaignPath, 'utf8');
// console.log("Source File: \n", source);

// Compile the source code and extract the compiled contracts
// `output` contains 2 objects, each contract is an object
const output = solc.compile(source, 1).contracts;
// console.log(solc.compile(source, 1));
console.log("Compiled Output: \n", output);

// Check if a directory exists, if it does not exist, it will create one
fs.ensureDirSync(buildPath);


// Write the 2 compiled contract into 2 seperate file
for (let contract in output) {
  // Get the path to the file we want to create
  contract_path = path.resolve(buildPath, contract.replace(':','') + '.json');
  // Write content into the file
  fs.outputJsonSync(
    contract_path,
    output[contract]
  );
}