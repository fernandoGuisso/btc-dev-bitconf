const bitcore = require('bitcore-lib');


const privateKey = new bitcore.PrivateKey('cSjxCWatxk2H3cEjo2YZDjqYSF1i5SSKArSwtcmvpAzjanczc3oY', bitcore.Networks.testnet);
const utxo = {
  "txId" : "c667f7ba68589885ea1eabec7bc457549af59878b3b4d262c6898355afb49ebe",
  "outputIndex" : 0,
  "address" : "mwPRxmdDtDchLWdf2WjwbASb7Fh4xnq5jD",
  "script" : "76a914ae15c7d0c0ec5e2402b512b58bb8a20dafbfd49a88ac",
  "satoshis" : 120000
};

const transaction = new bitcore.Transaction()
    .from(utxo)
    .addData('Eu sou o Imperador do Bitcoin!') // Add OP_RETURN data
    .sign(privateKey);

console.log(transaction);


// listunspent
// dumpprivkey "btc address"
// decoderawtransaction "hex"
// asm: hex to ASCII
// Boradcast transaction
// https://live.blockcypher.com/btc-testnet/pushtx/

// mining pool tx 8ab8c9b22e297817baff29e3750a7119c897867264c5c523048b5cf341a989d2