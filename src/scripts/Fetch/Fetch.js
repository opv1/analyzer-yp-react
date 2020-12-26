import { formateDateAgo, formateDateIco } from '../utils/utils'

const urlApiNews =
  process.env.NODE_ENV === 'development'
    ? 'http://nomoreparties.co/news/v2/everything?'
    : 'https://nomoreparties.co/news/v2/everything?'

const toDate = formateDateIco(new Date())
const fromDate = formateDateIco(new Date(formateDateAgo(new Date(), 6)))

export const fetchApiNews = (keyWord) => {
  return fetch(
    `${urlApiNews}` +
      `q=${keyWord}&` +
      `language=ru&` +
      `from=${fromDate}&` +
      `to=${toDate}&` +
      `pageSize=100&` +
      `sortBy=popularity&` +
      `apiKey=60659df53b2641f4bc17059b6e641af7`
  )
    .then((res) =>
      res.ok ? res.json() : Promise.reject(new Error(`${res.status}`))
    )
    .then((res) => {
      if (res.totalResults === 0) {
        throw new Error('Failed to found')
      } else {
        return res
      }
    })
    .catch((error) => {
      if (error.message === 'Failed to fetch') {
        throw new Error('Проблемы на этапе запроса новостей!')
      }

      if (error.message === 'Failed to found') {
        throw new Error('Ничего не найдено. Нулевой результат!')
      }
    })
}
