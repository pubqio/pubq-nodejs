"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpApi = void 0;
const axios_1 = require("axios");
class HttpApi {
    constructor(applicationId, applicationKey, applicationSecret) {
        this.applicationId = applicationId;
        this.applicationKey = applicationKey;
        this.applicationSecret = applicationSecret;
        this.httpClient = axios_1.default.create({
            baseURL: "https://rest.pubq.io",
        });
    }
    publish(channel, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.post("/v1/messages/publish", {
                channel,
                data,
            }, {
                headers: {
                    Id: this.applicationId,
                    Key: this.applicationKey,
                    Secret: this.applicationSecret,
                },
            });
            return response.data;
        });
    }
}
exports.HttpApi = HttpApi;
