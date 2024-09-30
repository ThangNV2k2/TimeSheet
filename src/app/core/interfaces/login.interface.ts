export interface ILoginRequest {
    userNameOrEmailAddress: string,
    password: string,
    rememberClient: boolean
}
export interface ILoginGoogleRequest {
    googleToken: string,
    secretCode: string
}
export interface ILoginResponse {
    accessToken: string,
    encryptedAccessToken: string,
    expireInSeconds: number,
    userId: number
}

export interface IApplication {
    version: string,
    releaseDate: string,
    features: {}
}

export interface tenant {
    tenancyName: string,
    name: string,
    id: number,
}
export interface ILoginInformations {
    user: IUserInfomation | null,
    application: IApplication,
    tenant: tenant | null
}
export interface ITenantInformation {
    tenancyName: string,
    name: string,
    id: number

}
export interface IUserInfomation {
    name: string,
    surname: string,
    userName: string,
    emailAddress: string,
    allowedLeaveDay: number,
    type: number,
    level: number,
    sex: 0,
    branch: 0,
    avatarPath: string,
    avatarFullPath: string,
    morningWorking: string,
    morningStartAt: string,
    morningEndAt: string,
    afternoonWorking: string,
    afternoonStartAt: string,
    afternoonEndAt: string,
    isWorkingTimeDefault: true,
    branchId: number | null,
    id: 0
}
