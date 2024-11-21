type UserInfo = {
  id: string;
  userName: string;
  userAge: number;
  userGender: string;
};

export type UserInfoResponseData = ApiResponseData<UserInfo>;
