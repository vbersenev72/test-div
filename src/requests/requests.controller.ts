import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateRequestDto, UpdateRequestCommentDto } from './dto/request.dto';
import { RequestsService } from './requests.service';

@Controller('requests')
export class RequestsController {

    constructor(private requestService: RequestsService) {}

    @Post('/')
    create(@Body() requestDto: CreateRequestDto) {
        return this.requestService.createRequest(requestDto)
    }

    @Get('/')
    getRequests() {
        return this.requestService.getRequests()
    }

    @Put('/:id')
    UpdateRequestComment(
        @Param('id') id:number,
        @Body() updateRequestCommentDto: UpdateRequestCommentDto
        ) {
        return this.requestService.UpdateRequestComment(+id, updateRequestCommentDto)
    }


}
