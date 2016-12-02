const blocktrail = require('blocktrail-sdk');

const config = require('./config');

const client = blocktrail.BlocktrailSDK({
    apiKey: config.apiKey,
    apiSecret: config.apiSecret,
    network: "BTC",
    testnet: true
});

client.address('2N7yspjWWj1b6VYiPqygA3R6qg46wjfaZpP', (err, address) =>
    console.log(address.balance)
);