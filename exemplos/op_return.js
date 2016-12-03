const bitcore = require('bitcore-lib');


const privateKey = new bitcore.PrivateKey('', bitcore.Networks.testnet);
const utxo = {
  "txId" : "",
  "outputIndex" : 0,
  "address" : "",
  "script" : "",
  "satoshis" : 100000
};

const transaction = new bitcore.Transaction()
    .from(utxo)
    .addData('Bem vindos a Bitconf 2016') // Add OP_RETURN data
    .sign(privateKey);

console.log(transaction);

// dumpprivkey "btc address"
// https://live.blockcypher.com/
// Boradcast transaction
// https://live.blockcypher.com/btc-testnet/pushtx/