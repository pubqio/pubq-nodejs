import axios, { AxiosInstance } from "axios";

class HttpApi {
    private applicationId: string;
    private applicationKey: string;
    private applicationSecret: string;
    private httpClient: AxiosInstance;

    constructor(
        applicationId: string,
        applicationKey: string,
        applicationSecret: string
    ) {
        this.applicationId = applicationId;
        this.applicationKey = applicationKey;
        this.applicationSecret = applicationSecret;

        this.httpClient = axios.create({
            baseURL: "https://rest.pubq.io",
        });
    }

    public async publish(channel: string, data: string | any[]): Promise<any> {
        const response = await this.httpClient.post(
            "/v1/messages/publish",
            {
                channel,
                data,
            },
            {
                headers: {
                    Id: this.applicationId,
                    Key: this.applicationKey,
                    Secret: this.applicationSecret,
                },
            }
        );

        return response.data;
    }
}

export { HttpApi };
