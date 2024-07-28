import users from 'mock/users';
import { LoginData, RegistrationData } from './types';
import { BaseApiResponse } from '@types';
import { wait } from '@utils';

const AuthService = {
  login: async (
    data: LoginData
  ): Promise<
    BaseApiResponse<{ accessToken: string; refreshToken: string }>
  > => {
    const { email, password } = data;

    await wait(3000);

    const foundedUser = users.find(
      ({ email: userEmail }) => userEmail === email
    );

    if (!foundedUser)
      return Promise.reject({
        success: false,
        data: null,
        message: new Error('User not found').message,
        statusCode: 404,
      });

    if (foundedUser.password !== password)
      return Promise.reject({
        success: false,
        data: null,
        message: new Error('Password is incorrect').message,
        statusCode: 401,
      });

    return Promise.resolve({
      success: true,
      statusCode: 200,
      data: {
        accessToken: 'accessToken',
        refreshToken: 'refreshToken',
      },
      message: 'User successfully login',
    });
  },

  registration: async (data: RegistrationData): Promise<BaseApiResponse> => {
    const { email, first_name, last_name, password } = data;

    if (users.findIndex(({ email: userEmail }) => userEmail === email) !== -1)
      return Promise.reject({
        success: false,
        data: null,
        statusCode: 409,
        message: 'User with this email already exist',
      });

    return Promise.resolve({
      data: null,
      statusCode: 201,
      success: true,
      message: 'User successfully created',
    });
  },

  logout: async (): Promise<BaseApiResponse> => {
    await wait(3000);

    return Promise.resolve({
      data: null,
      statusCode: 200,
      success: true,
      message: '',
    });
  },
};

export default AuthService;
