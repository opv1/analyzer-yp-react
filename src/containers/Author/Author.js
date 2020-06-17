import React from 'react';
import classes from './Author.module.scss';

const Author = () => {
  return (
    <section className={classes.Author}>
      <div className={classes.Wrapper}>
        <picture className={classes.Photo}></picture>
        <div className={classes.Info}>
          <h2 className={classes.Caption}>Об авторе</h2>
          <p className={classes.Text}>
            Добрый день. Меня зовут Павел Овечкин и это моя дипломная работа,
            которая демонстрирует мои навыки и знания в области
            фронтенд-разработки.
          </p>
          <p className={classes.Text}>
            После семи месяцев обучения, я научился работать с языком
            гипертекстовой разметки, языком стилей и языком программирования
            JavaScript. Процесс обучения у Яндекс.Практикума представлял из себя
            выполнение самостоятельных работ: от простой одностраничной верстки,
            до создания современного веб-приложения. С ними вы можете
            ознакомиться в моем профиле на GitHub.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Author;
