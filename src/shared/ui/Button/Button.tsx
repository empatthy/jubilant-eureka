import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Button.module.scss';
import { ButtonHTMLAttributes } from 'react';

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </button>
  );
};
