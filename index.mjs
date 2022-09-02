import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib(process.env);
// creates a starting balance to fund the test accounts
const startingBalance = stdlib.parseCurrency(100);

// creates accounts for testimg the smart contract
const accDeployer = await stdlib.newTestAccount(startingBalance);
const accReceiver = await stdlib.newTestAccount(startingBalance);

// create a function to get the balance of a participant and then shows us the before balances
const getBalance = async (who) =>
      // callback function receives a participant and returns the formatted currency balance
      stdlib.formatCurrency(await stdlib.balanceOf(who), 4);
// balance of deployer before any tranactions      
const beforeDeployer = await getBalance(accDeployer);
// balance of receiver before any transactions
const beforeReceiver = await getBalance(accReceiver);

// deployer deploys the contract
const ctcDeployer = accDeployer.contract(backend);
// receiver attaches to the to contract that the deployer deployed
const ctcReceiver = accReceiver.contract(backend, ctcDeployer.getInfo());

// creating the password
const thePassword = stdlib.randomUInt();

// initializing the backend for both participants
await Promise.all([
  // initializing backend for deployer
  backend.Deployer(ctcDeployer, {
    amount: stdlib.parseCurrency(50),
    password: thePassword,
  }),
  // initializing the backend for receiver
  backend.Receiver(ctcReceiver, {
    obtainPassword: () => {
      console.log('Deployer asked to give the preimage.');
      console.log(`Returning: ${thePassword}`);
      return thePassword;
    },
  }),
]);

// balance for deployer after the smart contract executes
const afterDeployer = await getBalance(accDeployer);
// balance for the receiver after the smart contract executes
const afterReceiver = await getBalance(accReceiver);

// logging the balances for the deployer
console.log(`Deployer went from ${beforeDeployer} to ${afterDeployer}.`);
// logging the balances for the receiver
console.log(`Receiver went from ${beforeReceiver} to ${afterReceiver}`);