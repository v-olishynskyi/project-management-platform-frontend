export type BaseApiResponse<T = any> = {
  success: boolean;
  message?: string | null | undefined;
  data: T | null;
  statusCode: number;
};

export type SetterWithOneParam<T, R = void> = (value: T) => R;
