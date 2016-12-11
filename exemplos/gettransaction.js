const blocktrail = require('blocktrail-sdk');

const config = require('./config');

const client = blocktrail.BlocktrailSDK({
    apiKey: config.apiKey,
    apiSecret: config.apiSecret,
    network: "BTC",
    testnet: true
});

client.transaction('c667f7ba68589885ea1eabec7bc457549af59878b3b4d262c6898355afb49ebe', (err, tx) =>
    console.log(tx)
);