// this program involves two participants
// deployer sends funds and receiver receives funds
// deployer knows amount they want to send at start
// deployer also wants to send the secret password
// receiver starts out knowing nothing
// deployer doesnt gain any additional knowlege during execution
// receiver learns the password during execution
// deployer transfers funds at beginning
// receiver receives funds at the end after learning the password

'reach 0.1';
'use strict';

// the amount deployer transfers is represented as a unsigned integer named amount
// the password is represented as a unsigned integer named password
// receiver has a function named obtainPassword that returns the password once the receiver knows it
export const main = Reach.App(
  {},
  // participant interact interface is defined on the backend
  [Participant('Deployer', { amount: UInt, password: UInt }),
  Participant('Receiver', { obtainPassword: Fun([], UInt )}) ],
  (Deployer, Receiver) => {
    Deployer.only(() => {
      const _password = interact.password;
      // deployer declassifies the amount and the passwordDigested for publication
      const [ amount, passwordDigested ] = declassify([ interact.amount, digest(_password) ]); });
    // deployer publishes a digest of the password and amount and pays amount
    // publish puts us into a consensus step
    Deployer.publish(passwordDigested, amount)
      .pay(amount);
    // commit ends the consensus step and encodes information on the blockchain
    commit();

    // receiver may not know what the deployer's password is 
    unknowable(Receiver, Deployer(_password));

    Receiver.only(() => {
      // receiver provides their password here 
      const password = declassify(interact.obtainPassword());
      // asserts that receiver believes their password is correct, they are a honest participant
      assume( passwordDigested == digest(password) ); });
    // receiver publishes the password
    // publish puts us into a consensus step
    Receiver.publish(password);
    // blockchain consensus network checks that the password is correct
    require( passwordDigested == digest(password) );
    // blockchain transfers amount to receiver
    transfer(amount).to(Receiver);
    // we now end the consensus step with a commit
    commit();
    // dapp exits
    exit(); } );