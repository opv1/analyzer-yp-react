export const formateDateAgo = (date, days) => {
  return date.setDate(date.getDate() - days)
}

export const formateDateIco = (date) => {
  return date.toISOString().slice(0, 10)
}

export const formateDateLocal = (date, options) => {
  return date.toLocaleString('ru', options)
}

const counterCoincidencesTotal = (newsObject, regExp) => {
  const resultSort = newsObject.articles.map((article) =>
    article.title.match(regExp)
  )

  const amountKeyWord = resultSort.filter((word) => {
    return word !== null && word !== undefined
  }).length

  return amountKeyWord
}

const counterCoincidencesWeek = (newsObject, regExp, currentDate) => {
  let counter = 0

  newsObject.articles.map((article) => {
    formateDateLocal(new Date(article.publishedAt), {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }) ===
      formateDateLocal(currentDate, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }) && article.title.match(regExp)
      ? (counter += 1)
      : (counter += 0)

    return false
  })

  return counter
}

const weekObject = (newsObject, regExp, date, amountKeyWord) => {
  const currentWeek = []

  for (let i = 0; i < 7; i += 1) {
    let currentDate = date
    const daysArray = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
    const dayNumber = formateDateLocal(currentDate, { day: 'numeric' })
    const dayName = daysArray[currentDate.getDay()]
    const newsCount = counterCoincidencesWeek(newsObject, regExp, currentDate)
    const widthPercent = Math.round((newsCount * 100) / amountKeyWord)

    currentWeek.push({ dayNumber, dayName, newsCount, widthPercent })
    currentDate = formateDateAgo(date, 1)
  }

  return currentWeek
}

export const setDataStorage = (newsObject, keyWord) => {
  localStorage.setItem('newsObject', JSON.stringify(newsObject))

  const regExp = new RegExp(`${keyWord}`, `gi`)
  const amountKeyWord = counterCoincidencesTotal(newsObject, regExp)
  const presentMonth = formateDateLocal(new Date(), { month: 'long' })
  const presentWeek = weekObject(newsObject, regExp, new Date(), amountKeyWord)
  const { totalResults } = newsObject

  const analyticsObject = {
    amountKeyWord,
    keyWord,
    presentMonth,
    presentWeek,
    totalResults,
  }

  localStorage.setItem('analyticsObject', JSON.stringify(analyticsObject))
}
