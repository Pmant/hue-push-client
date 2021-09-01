# hue push client
[![License](https://img.shields.io/badge/License-MIT-blue)](#license "Go to license section")

Allows easy access to the push API of Philips Hue Bridge

# Installation
`npm install hue-push-client`

# Usage Example
```javascript
/**
 * This example connects to a Hue Bridge and closes connection after 30 seconds
 */
const HuePushClient = require('hue-push-client');

const client = new HuePushClient({ip: '192.168.0.85', user: 'mWAfdI7PUJRvZ9IwXB0YgeLVn9Ytjpb5RjrFJ0rn'});
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
The data part of an incomming message looks like this:
```json
[
   {
      "creationtime":"2021-09-01T08:40:54Z",
      "data":[
         {
            "id":"d231f405-baab-406e-0000-d345a1440000",
            "id_v1":"/sensors/8",
            "light":{
               "light_level":10509,
               "light_level_valid":true
            },
            "type":"light_level"
         }
      ],
      "id":"f15d7da4-f849-44c9-0000-afc54dbe0000",
      "type":"update"
   }
]
```

You can also retrieve a description of all UUID's that are used in update messages:
```javascript
/**
 * Be aware that uuids() returns a promise
 */
async function getUUIDs() {
    try {
        let UUIDs = await client.uuids();
        console.log(UUIDs);
    } catch (e) {
        console.log(e);
    }
};
getUUIDs();
```

# Documentation
todo (see examples)

# license
Released under [ISC](https://github.com/Pmant/hue-push-client/blob/master/license.txt) by @Pmant