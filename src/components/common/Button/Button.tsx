import React from 'react';
import './styles.scss';

type Size = 'small' | 'medium' | 'large';

type Props = {
  size?: Size;
} & Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  'size'
>;

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, size = 'medium', ...rest }, ref) => {
    return (
      <button
        {...rest}
        ref={ref}
        className={`button button_${size} ${rest.className || ''}`}>
        {children}
      </button>
    );
  }
);

export default Button;
