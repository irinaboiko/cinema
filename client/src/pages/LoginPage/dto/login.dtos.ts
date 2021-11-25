export interface LoginResponseDto {
  _id: string;
  name: string;
  email: string;
  role: string;
  userToken?: string;
}

export interface SignInDto {
  email: string;
  password: string;
}
