export interface LoginRequestData {
  loginName: string;
  password: string;
  code: string;
  validateCodeKey: string;
}

export type LoginCodeResponseData = ApiResponseData<{
  img: string;
  validateCodeKey: string;
}>;

export type LoginResponseData = ApiResponseData<{ accessToken: string }>;
