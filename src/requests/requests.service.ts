import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRequestDto, UpdateRequestCommentDto } from './dto/request.dto';
import { DBService } from 'db';
import { Pool } from 'pg';

@Injectable()
export class RequestsService {

    private pool: Pool;
    constructor(private DBService: DBService) {
        this.pool = new Pool({
          host: this.DBService.get('databaseHost'),
          port: parseInt(this.DBService.get('databasePort'), 10),
          database: this.DBService.get('databaseName'),
          user: this.DBService.get('databaseUsername'),
          password: this.DBService.get('databasePassword'),
        });
      }

    async getRequests() {
        const requests = await this.pool.query('select * from requests;')
        const requestsArr = requests.rows

        let response = []
        requestsArr.map((el:any)=>{
            if (el.status == 'Resolved') {
                response.push(el)
            } else {
                response.unshift(el)
            }
        })

        return response
    }

    async createRequest(dto: CreateRequestDto) {
        const request = await this.pool.query('INSERT INTO requests(name, email, status, message) values($1, $2, $3, $4) RETURNING *', [dto.name, dto.email, dto.status, dto.message])
        const res = request.rows
        return res
    }

    async UpdateRequestComment(id:number, dto: UpdateRequestCommentDto) {

        const comment = dto.comment
        const status = 'Resolved'
        const date = new Date()

        const requestUpdateComment = await this.pool.query('UPDATE requests SET (comment, status, updated_at) = ($1, $2, $3) WHERE id = $4 RETURNING *', [comment, status, date, id])
        return requestUpdateComment.rows
        
    } 
}
