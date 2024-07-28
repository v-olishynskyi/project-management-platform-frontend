import React from 'react';
import { FormState } from './types';
import s from './styles.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, useTheme } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../../api/hooks/auth';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { spacing } = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>();
  const { isPending: isLogging, mutateAsync: login } = useLogin();

  const onSubmit: SubmitHandler<FormState> = async data => {
    await login(data);
    navigate('/');
  };

  const goToRegister = () => navigate('/registration');

  return (
    <div className={s.login_page_container}>
      <section className={s.content_container}>
        <div className={s.header}>
          <Typography variant='h3'>Pro.Mana</Typography>
          <Typography variant='body2' className={s.login_to_continue}>
            Увійдіть для продовження
          </Typography>
        </div>

        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              sx={{ marginBottom: spacing(2) }}
              size='small'
              variant='outlined'
              type='email'
              placeholder='Email'
              error={!!errors.email?.message}
              helperText={errors.email?.message}
              {...register('email', {
                required: { value: true, message: 'Поле обовʼязкове' },
                pattern: {
                  message: 'Email is not valid',
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                },
              })}
            />
            <TextField
              sx={{ marginBottom: spacing(3) }}
              size='small'
              variant='outlined'
              type='password'
              placeholder='Password'
              error={!!errors.password?.message}
              helperText={errors.password?.message}
              {...register('password', {
                required: { value: true, message: 'Поле обовʼязкове' },
              })}
            />
            <LoadingButton
              size='large'
              fullWidth
              variant='contained'
              type='submit'
              loading={isLogging}>
              Увійти
            </LoadingButton>
          </form>

          <Button
            size='small'
            variant='text'
            color='secondary'
            fullWidth
            sx={{ marginTop: spacing(4) }}
            onClick={goToRegister}>
            Ще не маєте аккаунту? Зареєструватись
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Login;
