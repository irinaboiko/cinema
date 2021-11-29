import { AxiosResponse } from "axios";

import api from "../../../api/config";
import { LoginResponseDto, SignInDto } from "../dto/login.dtos";

export const signIn = (
  body: SignInDto
): Promise<AxiosResponse<LoginResponseDto>> => {
  return api.post("auth/signin", body);
};
