import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib(process.env);
// creates a starting balance to fund the test accounts
const startingBalance = stdlib.parseCurrency(100);

// creates accounts for testimg the smart contract
const accDeployer = await stdlib.newTestAccount(startingBalance);
const accReceiver = await stdlib.newTestAccount(startingBalance);

