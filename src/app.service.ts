import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    getRequests() {
        return [{id: 1, name: 'request2'}]
    }
}