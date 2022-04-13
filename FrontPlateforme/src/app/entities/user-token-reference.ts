export interface IUserToken{
    id: number,
    email: string,
    username: string,
    jwt: string,
    authorities: string[]
}