import React from 'react';
import classes from './Form.module.scss';

const Form = (props) => {
  const cls = [classes.Form, classes[props.type]];

  return (
    <form className={cls.join(' ')} onSubmit={props.onSubmit} name={props.name}>
      {props.children}
    </form>
  );
};

export default Form;
