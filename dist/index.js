"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventSource = require("eventsource");
const https = require("https");
class HuePushClient extends EventSource {
    /**
     *
     * @param {Bridge} bridge
     */
    constructor(bridge) {
        super(`https://${bridge.ip}:443/eventstream/clip/v2`, {
            https: {
                rejectUnauthorized: false
            },
            headers: {
                'Accept': 'text/event-stream',
                'hue-application-key': bridge.user
            }
        });
        this.bridge = bridge;
    }
    /**
     *
     * @param {ResourceParser} resourceParser
     * @returns {Promise<any|Error>}
     */
    resources(resourceParser = defaultResourceParser) {
        return new Promise((resolve, reject) => {
            https.get({
                host: this.bridge.ip,
                port: 443,
                path: '/clip/v2/resource',
                method: 'GET',
                protocol: 'https:',
                rejectUnauthorized: false,
                headers: { 'hue-application-key': this.bridge.user }
            }, (res) => {
                let body = '';
                res.on('data', (chunk) => {
                    body += chunk;
                });
                res.on('end', () => {
                    const result = resourceParser(body);
                    if (result instanceof Error) {
                        reject(result);
                    }
                    else {
                        resolve(result);
                    }
                });
            }).on('error', (e) => {
                reject(e);
            });
        });
    }
    /**
     *
     * @returns {Promise<Object<Resource>|Error>}
     */
    uuids() {
        return this.resources(uuidResourceParser);
    }
    /**
     *  closes all open connections to Hue Bridge
     */
    close() {
        super.close();
    }
}
module.exports = HuePushClient;
/**
 * returns Hue Bridge's resources output as object
 * @param {string} resources
 * @returns {Object|SyntaxError}
 */
const defaultResourceParser = (resources) => {
    let jsonObject = { 'asd': 'asd' };
    try {
        jsonObject = JSON.parse(resources);
    }
    catch (e) {
        return e instanceof SyntaxError ? e : new Error('unknown error');
    }
    return jsonObject;
};
/**
 * returns Hue Bridge's resources output as object with UUIDs as keys
 * @param {string} resources
 * @returns {Object|SyntaxError}
 */
const uuidResourceParser = (resources) => {
    let data;
    try {
        data = JSON.parse(resources).data;
    }
    catch (e) {
        return e instanceof SyntaxError ? e : new Error('unknown error');
    }
    const UUIDs = {};
    for (const uuid of data) {
        UUIDs[uuid.id] = uuid;
    }
    return UUIDs;
};
