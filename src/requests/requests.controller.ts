import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateRequestDto, UpdateRequestCommentDto } from './dto/create-request.dto';
import { RequestsService } from './requests.service';

@Controller('requests')
export class RequestsController {

    constructor(private requestService: RequestsService) {}

    @Post('/requests')
    create(@Body() requestDto: CreateRequestDto) {
        return this.requestService.createRequest(requestDto)
    }

    @Get('/requests')
    getRequests() {
        return this.requestService.getRequests()
    }

    @Put('/requests/:id')
    UpdateRequestComment(@Param() requestDto: UpdateRequestCommentDto) {
        return this.requestService.UpdateRequestComment(requestDto)
    }


}
