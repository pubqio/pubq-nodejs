declare class HttpApi {
    private applicationId;
    private applicationKey;
    private applicationSecret;
    private httpClient;
    constructor(applicationId: string, applicationKey: string, applicationSecret: string);
    publish(channel: string, data: string | any[]): Promise<any>;
}
export { HttpApi };
