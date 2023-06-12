export class CreateRequestDto {

    readonly email: string
    readonly name: string
    readonly status: string
    readonly message: string

}

export class UpdateRequestCommentDto {
    readonly comment: string
}