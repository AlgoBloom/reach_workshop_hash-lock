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

// the amount deployer transfers is represented as a unsigned integer named amount
// the password is represented as a unsigned integer named password
// receiver has a function named obtainPassword that returns the password once the receiver knows it

[Participant('Deployer', { amount: UInt, password: UInt }),
Participant('Receiver', { obtainPassword: Fun([], UInt )}) ],



