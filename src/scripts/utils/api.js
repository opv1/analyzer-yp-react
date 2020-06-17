const urlApiNews =
  process.env.NODE_ENV === 'development'
    ? 'http://praktikum.tk/news/v2/everything?'
    : 'https://praktikum.tk/news/v2/everything?';

export { urlApiNews };
