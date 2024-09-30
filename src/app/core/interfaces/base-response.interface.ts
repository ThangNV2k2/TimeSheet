export interface IBaseResponse<T> {
    result: T,
    targetUrl: string | null,
    success: boolean,
    unAuthorizedRequest: boolean,
    __abp: boolean,
    error: IBaseResponseError | null,
}

export interface IBaseResponseError {
    code: number,
    message: string,
    details: string | null,
    validationErrors: object | null,
}