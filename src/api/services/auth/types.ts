export type LoginData = {
  email: string;
  password: string;
};

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export type RegistrationData = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
};
