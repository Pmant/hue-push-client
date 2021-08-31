# hue push client
[![License](https://img.shields.io/badge/License-MIT-blue)](#license "Go to license section")

Allows easy access to the push API of Philips Hue Bridge

#Installation
`npm install hue-push-client`

#Usage Example
```
/**
 * This example connects to a Hue Bridge and closes connection after 30 seconds
 */
const HuePushClient = require('hue-push-client');

const client = new HuePushClient({ip: '192.168.0.10', user: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'});
setTimeout(() => {client.close();}, 30000);

client.addEventListener('open', function () {
    console.log('connection opened');
});
client.addEventListener('close', function () {
    console.log('connection closed');
});
client.addEventListener('error', function (e) {
    console.log('error: ' + e.message);
});

client.addEventListener('message', function (message) {
    if (!message.data) {
        console.log('empty message');
        return;
    }
    try {
        let data = JSON.parse(message.data);
        console.log(JSON.stringify(data));
    } catch (e) {
        console.log('could not parse data');
        return;
    }
});
```

#Documentation
[Exports](modules.md)

#license
Released under [ISC](https://github.com/Pmant/hue-push-client/blob/master/license.txt) by @Pmant