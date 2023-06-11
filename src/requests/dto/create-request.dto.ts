export class CreateRequestDto {

    readonly email: string
    readonly name: string
    readonly status: string
    readonly message: string
    readonly comment: string
}

export class UpdateRequestCommentDto {
    readonly id: number
}