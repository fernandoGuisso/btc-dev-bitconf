const bitcore = require('bitcore-lib');

const privateKey = new bitcore.PrivateKey(bitcore.Networks.testnet);

const publicKey = new bitcore.PublicKey(privateKey);

const address = new bitcore.Address(publicKey, bitcore.Networks.testnet);

const data = [];

data.push(privateKey);
data.push(publicKey);
data.push(address);

console.log(data);