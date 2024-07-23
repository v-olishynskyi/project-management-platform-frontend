import React from 'react';
import { FormState } from './types';
import './styles.scss';
import { Input, Typography } from '@components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>();
  const onSubmit: SubmitHandler<FormState> = data => console.log(data);

  return (
    <div className='login-page-container'>
      <section className='content-container'>
        <div className='header'>
          <Typography variant='heading3'>Pro.Mana</Typography>
          <Typography
            variant='body'
            component='span'
            classes='login-to-continue'>
            Увійдіть для продовження
          </Typography>
        </div>

        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              containerClasses='auth-input'
              type='email'
              placeholder='Email'
              error={errors.email?.message}
              {...register('email', {
                required: { value: true, message: 'Email is required' },
                pattern: {
                  message: 'Email is not valid',
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                },
              })}
            />
            <Input
              containerClasses='auth-input'
              type='password'
              placeholder='Password'
              {...register('password', {
                required: { value: true, message: 'Password is required' },
              })}
              error={errors.password?.message}
            />
            <Button size='large' type='submit'>
              Увійти
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
