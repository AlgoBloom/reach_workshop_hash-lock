import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

// sets the amount value
const amount = stdlib.parseCurrency(100);

// accounts are created 
const [ accDeployer, accReceiver ] =
  await stdlib.newTestAccounts(2, amount);
console.log('Hello, Deployer and Receiver!');

// deployer launches the contract and then receiver attaches to the contract and gets information about deployer
console.log('Launching...');
const ctcDeployer = accDeployer.contract(backend);
const ctcReceiver = accReceiver.contract(backend, accDeployer.getInfo());

// starts the backend for deployer and receiver
console.log('Starting backends...');
await Promise.all([
  backend.Deployer(ctcDeployer, {
    ...stdlib.hasRandom,
    // implement deployers's interact object here
  }),
  backend.Receiver(ctcReceiver, {
    ...stdlib.hasRandom,
    // implement receiver's interact object here
  }),
]);

console.log('Funds have been released!');
