import React from 'react';
import './styles.scss';
import { Typography } from '@components';

type Size = 'medium' | 'large' | 'small';

type Props = {
  size?: Size;
  error?: string;
  containerClasses?: string;
} & Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'size'
>;

const Input: React.FC<Props> = React.forwardRef<HTMLInputElement, Props>(
  ({ size = 'medium', error, containerClasses, ...rest }, ref) => {
    return (
      <div className={`input-container ${containerClasses || ''}`}>
        <input
          {...rest}
          ref={ref}
          className={`input input_${size} ${rest.className || ''}`}
        />
        {error && (
          <Typography classes='input-error' variant='small'>
            {error}
          </Typography>
        )}
      </div>
    );
  }
);

export default Input;
