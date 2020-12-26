import React from 'react'
import classes from './Customer.module.scss'

const Customer = () => {
  return (
    <section className={classes.Customer}>
      <div className={classes.Wrapper}>
        <h1 className={classes.Caption}>Клиентам</h1>
        <div className={classes.Block}>
          <p className={classes.Text}>
            Этот сайт — дипломный проект студента Яндкс.Практикума. Его цель —
            показать, чему научился студент, и какими технологиями владеет.
          </p>
          <p className={classes.Text}>
            Вёртска сайта выполнена по методологии БЭМ. Это делает сайт гибким и
            масштабируемым. Кроме того, добавлять новые страницы и
            функциальность проще и быстрее, чем в проектах, выполненных по
            другим методологиям. Также сайт проще и дешевле поддерживать.
          </p>
          <p className={classes.Text}>
            Карточки с новостям приходят с сервера и обрабатываются асихронно.
            То есть сайт продолжает работать, пока от сервера приходит ответ.
            Это повышает удобство использования сервиса.
          </p>
          <p className={classes.Text}>
            При создании проекта была использона сборка технологией Webpack. Это
            современных подход к разработке сайтов. Код оптимизируется, а
            значит, сайт работает быстрее. Также сайт работает в старых
            браузерах. Даже если посетители — пользователи старых операционных
            систем у них не будет проблем с отображением. А значит потенциальная
            аудитория возрастает.
          </p>
          <p className={classes.Text}>
            Проект был проверен экспертами Яндекс.Практикума. И если вашему
            бизесу нужен сайт, мы рекомендуем обратиться к этому студенту.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Customer
