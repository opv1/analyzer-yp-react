import React from 'react';
import classes from './Error.module.scss';

const Error = (props) => {
  const cls = [classes.Error, classes[props.type]];

  return <span className={cls.join(' ')}>{props.errorMessage}</span>;
};

export default Error;
