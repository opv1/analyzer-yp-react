import React from 'react';
import classes from './Button.module.scss';

const Button = (props) => {
  const cls = [classes.Button, classes[props.type]];

  return (
    <button
      className={cls.join(' ')}
      name={props.name}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
