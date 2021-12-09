import { AxiosResponse } from "axios";

import api from "../../../api/config";
import { SignUpDto, SignUpResponseDTO } from "../dto/signUp.dtos";

export const signUp = (
  body: SignUpDto
): Promise<AxiosResponse<SignUpResponseDTO>> => {
  return api.post("auth/signup", body);
};
