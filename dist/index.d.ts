import EventSource = require('eventsource');
export declare interface Bridge {
    /** local IP of Hue Bridge, e.g. `10.0.0.1` */
    ip: string;
    /** registered Hue Bridge user */
    user: string;
}
export declare class HuePushClient extends EventSource {
    bridge: Bridge;
    /**
     *
     * @param {Bridge} bridge
     */
    constructor(bridge: Bridge);
    /**
     *
     * @param {ResourceParser} resourceParser
     * @returns {Promise<any|Error>}
     */
    resources(resourceParser: ResourceParser): Promise<any | Error>;
    /**
     *
     * @returns {Promise<Object<Resource>|Error>}
     */
    uuids(): Promise<{
        [index: string]: Resource;
    } | Error>;
    /**
     *  closes all open connections to Hue Bridge
     */
    close(): void;
}
interface Resource {
    id: string;
}
export declare type ResourceParser = (resources: string) => any;
/**
 * returns Hue Bridge's resources output as object
 * @param {string} resources
 * @returns {Object|SyntaxError}
 */
export declare const defaultResourceParser: ResourceParser;
/**
 * returns Hue Bridge's resources output as object with UUIDs as keys
 * @param {string} resources
 * @returns {Object|SyntaxError}
 */
export declare const uuidResourceParser: ResourceParser;
export {};
