import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRequestDto, UpdateRequestCommentDto } from './dto/create-request.dto';
import { Request } from './requests.model';

@Injectable()
export class RequestsService {

    constructor(@InjectModel(Request) private requestRepository: typeof Request) {}

    async getRequests() {
        const requests = await this.requestRepository.findAll()
        return requests
    }

    async createRequest(dto: CreateRequestDto) {
        const request = await this.requestRepository.create(dto)
        return request
    }

    async UpdateRequestComment(dto: UpdateRequestCommentDto) {

    } 
}
