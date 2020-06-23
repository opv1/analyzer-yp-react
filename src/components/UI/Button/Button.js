import React from 'react';
import classes from './Button.module.scss';

const Button = ({ onClick, type, name, disabled, children }) => {
  const cls = [classes.Button, classes[type]];

  return (
    <button
      className={cls.join(' ')}
      onClick={onClick}
      name={name}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
