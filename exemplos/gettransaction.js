const blocktrail = require('blocktrail-sdk');

const config = require('./config');

const client = blocktrail.BlocktrailSDK({
    apiKey: config.apiKey,
    apiSecret: config.apiSecret,
    network: "BTC",
    testnet: true
});

client.transaction('98537183aaaf285f1a5fe897dbcf04f9b2919bb7cad45bfef7e938293a623149', (err, tx) =>
    console.log(tx)
);