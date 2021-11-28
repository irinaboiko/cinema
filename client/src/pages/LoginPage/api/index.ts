import { AxiosResponse } from "axios";
import { LoginResponseDto, SignInDto } from "../dto/login.dtos";

import api from "../../../api/config";

export const signIn = (
  body: SignInDto
): Promise<AxiosResponse<LoginResponseDto>> => {
  return api.post("auth/signin", body);
};
