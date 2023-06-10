import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller('/api')
export class AppController {

    constructor(private AppService: AppService) {

    }

    @Get('/requests')
    getRequests() {
        return this.AppService.getRequests()
    }
}