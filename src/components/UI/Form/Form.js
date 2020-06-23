import React from 'react';
import classes from './Form.module.scss';

const Form = ({ onSubmit, type, name, children }) => {
  const cls = [classes.Form, classes[type]];

  return (
    <form className={cls.join(' ')} onSubmit={onSubmit} name={name}>
      {children}
    </form>
  );
};

export default Form;
