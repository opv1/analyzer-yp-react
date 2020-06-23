import React from 'react';
import classes from './Input.module.scss';

const Input = ({
  onChange,
  type,
  value,
  name,
  placeholder,
  title,
  pattern,
  minLength,
  maxLength,
}) => {
  const cls = [classes.Input, classes[type]];

  return (
    <input
      className={cls.join(' ')}
      onChange={onChange}
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
      title={title}
      pattern={pattern}
      minLength={minLength}
      maxLength={maxLength}
      required
    ></input>
  );
};

export default Input;
