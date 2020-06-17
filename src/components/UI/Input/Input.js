import React from 'react';
import classes from './Input.module.scss';

const Input = (props) => {
  const cls = [classes.Input, classes[props.type]];

  return (
    <input
      className={cls.join(' ')}
      onChange={props.onChange}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      title={props.title}
      /*       minlength={props.validation.minlength}
      maxlength={props.validation.maxlength} */
      pattern={props.pattern}
      required
    ></input>
  );
};

export default Input;
