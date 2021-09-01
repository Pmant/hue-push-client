import EventSource = require('eventsource');
import https = require('https');
import {IncomingMessage} from 'http';


declare interface Bridge {
    /** local IP of Hue Bridge, e.g. `10.0.0.1` */
    ip: string
    /** registered Hue Bridge user */
    user: string
}

class HuePushClient extends EventSource {
    bridge: Bridge;

    /**
     *
     * @param {Bridge} bridge
     */
    constructor(bridge: Bridge) {
        super(`https://${bridge.ip}:443/eventstream/clip/v2`, {
                https: {
                    rejectUnauthorized: false
                },
                headers: {
                    'Accept': 'text/event-stream',
                    'hue-application-key': bridge.user
                }
            }
        );
        this.bridge = bridge;
    }


    /**
     *
     * @param {ResourceParser} resourceParser
     * @returns {Promise<any|Error>}
     */
    resources(resourceParser: ResourceParser = defaultResourceParser): Promise<any | Error> {
        return new Promise((resolve, reject) => {
            https.get({
                    host: this.bridge.ip,
                    port: 443,
                    path: '/clip/v2/resource',
                    method: 'GET',
                    protocol: 'https:',
                    rejectUnauthorized: false,
                    headers: {'hue-application-key': this.bridge.user}
                },
                (res: IncomingMessage) => {
                    let body = '';
                    res.on('data', (chunk: string) => {
                        body += chunk;
                    });
                    res.on('end', () => {
                        const result = resourceParser(body);
                        if (result instanceof Error) {
                            reject(result);
                        } else {
                            resolve(result);
                        }
                    });
                }
            ).on('error', (e: Error) => {
                reject(e);
            });
        });
    }

    /**
     *
     * @returns {Promise<Object<Resource>|Error>}
     */
    uuids(): Promise<{ [index: string]: Resource } | Error> {
        return this.resources(uuidResourceParser);
    }

    /**
     *  closes all open connections to Hue Bridge
     */
    close(): void {
        super.close();
    }
}

module.exports = HuePushClient;

interface Resource {
    id: string
}

type ResourceParser = (resources: string) => any;

/**
 * returns Hue Bridge's resources output as object
 * @param {string} resources
 * @returns {Object|SyntaxError}
 */
const defaultResourceParser: ResourceParser = (resources: string): any | Error => {
    let jsonObject: object = {'asd': 'asd'};
    try {
        jsonObject = JSON.parse(resources);
    } catch (e) {
        return e instanceof SyntaxError ? e : new Error('unknown error');
    }
    return jsonObject;
}

/**
 * returns Hue Bridge's resources output as object with UUIDs as keys
 * @param {string} resources
 * @returns {Object|SyntaxError}
 */
const uuidResourceParser: ResourceParser = (resources: string): { [index: string]: Resource } | Error => {
    let data: Iterable<Resource>;
    try {
        data = JSON.parse(resources).data;
    } catch (e) {
        return e instanceof SyntaxError ? e : new Error('unknown error');
    }
    const UUIDs: { [index: string]: Resource } = {};
    for (const uuid of data) {
        UUIDs[uuid.id] = uuid;
    }
    return UUIDs;
}


