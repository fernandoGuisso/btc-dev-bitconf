const blocktrail = require('blocktrail-sdk');

const config = require('./config');

const client = blocktrail.BlocktrailSDK({
    apiKey: config.apiKey,
    apiSecret: config.apiSecret,
    network: "BTC",
    testnet: true
});

client.transaction('609b9b7455ed05d49ef35ff94b4c9755f15bb40fbe9db31e0ed3173bf6709f74', (err, tx) =>
    console.log(tx)
);