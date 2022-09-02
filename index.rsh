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

[Participant('Deployer', { amount: UInt, passwordDigested: UInt }),
Participant('Receiver', { obtainPassword: Fun([], UInt )}) ],

// deployer publishes a digest of the password and amount and pays amount
// receiver publishes the password
// blockchain consensus checks password is correct
// receiver is paid

// publish puts us into a consensus step
Deployer.publish(passwordDigested, amount)
        // deployer pays the amount
        .pay(amount);
        // deployer commits this information to the blockchain, ends current concensus step
commit();

// the receiver publishes the password
// now we are in a consensus step
Receiver.publish(password);


