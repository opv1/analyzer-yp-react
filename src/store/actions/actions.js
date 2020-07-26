import { fetchApiNews } from '../../scripts/fetch/fetch';
import { axiosApiCommits } from '../../scripts/axios/axios';
import { setDataStorage } from '../../scripts/utils/utils';
import {
  STYLES_LAYOUT,
  INITIAL_NEWS,
  FETCH_NEWS_START,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_ERROR,
  MORE_NEWS,
  FETCH_COMMITS_START,
  FETCH_COMMITS_SUCCESS,
  FETCH_COMMITS_ERROR,
  INPUT_CHANGE,
} from './actionType';

export function setStylesLayout(pathname) {
  return (dispatch) => {
    if (pathname === '/yp-graduate-work-react/') {
      dispatch(
        stylesLayout(
          'withBackground',
          '#ffffff',
          'inset 0px -1px 0px rgba(255, 255, 255, 0.2)'
        )
      );
    } else {
      dispatch(stylesLayout(null, '#000000', 'inset 0px -1px 0px #d1d2d6'));
    }
  };
}

export function setInitialNews() {
  return (dispatch) => {
    const news = JSON.parse(localStorage.getItem('newsObject'));
    const analytics = JSON.parse(localStorage.getItem('analyticsObject'));
    const { keyWord } = analytics;

    dispatch(initialNews(news, analytics, keyWord));
  };
}

export function fetchNews(event) {
  return (dispatch) => {
    event.preventDefault();

    const searchForm = event.target;
    const searchInput = searchForm.elements.input;
    const searchButton = searchForm.elements.button;
    const keyWord = searchInput.value;

    dispatch(fetchNewsStart());

    new Promise((resolve) => {
      searchInput.setAttribute('disabled', true);
      searchButton.setAttribute('disabled', true);

      resolve(
        fetchApiNews(keyWord)
          .then((responseNews) => {
            dispatch(fetchNewsSuccess(responseNews));

            setDataStorage(responseNews, keyWord);
          })
          .catch((error) => {
            if (error.message === 'Проблемы на этапе запроса новостей!') {
              dispatch(fetchNewsError('failedToFetch'));
            }

            if (error.message === 'Ничего не найдено. Нулевой результат!') {
              dispatch(fetchNewsError('failedToFound'));
            }
          })
          .finally(() => {
            searchInput.removeAttribute('disabled');
            searchButton.removeAttribute('disabled');
          })
      );
    });
  };
}

export function handleClick() {
  return (dispatch) => {
    dispatch(moreNews());
  };
}

export function handleChange(event) {
  return (dispatch) => {
    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity('Нужно ввести ключевое слово');
    } else if (
      event.target.validity.tooShort ||
      event.target.validity.tooLong
    ) {
      event.target.setCustomValidity('Должно быть от 2 до 10 символов');
    } else if (event.target.validity.patternMismatch) {
      event.target.setCustomValidity('Необходимо вводить кириллицей');
    } else {
      event.target.setCustomValidity('');
    }

    dispatch(inputChange(event.target.value));
  };
}

export function fetchCommits() {
  return async (dispatch) => {
    dispatch(fetchCommitsStart());

    try {
      const responseCommits = await axiosApiCommits.get(
        `/repos/opv1/yp-graduate-work-react/commits?`
      );

      dispatch(fetchCommitsSuccess(responseCommits.data));
    } catch (error) {
      dispatch(fetchCommitsError(error));
    }
  };
}

export function stylesLayout(typeLayout, color, boxShadow) {
  return {
    type: STYLES_LAYOUT,
    typeLayout,
    color,
    boxShadow,
  };
}

export function initialNews(news, analytics, keyWord) {
  return {
    type: INITIAL_NEWS,
    news,
    analytics,
    keyWord,
  };
}

export function fetchNewsStart() {
  return {
    type: FETCH_NEWS_START,
  };
}

export function fetchNewsSuccess(news) {
  return {
    type: FETCH_NEWS_SUCCESS,
    news,
  };
}

export function fetchNewsError(typeError) {
  return {
    type: FETCH_NEWS_ERROR,
    typeError,
  };
}

export function moreNews() {
  return {
    type: MORE_NEWS,
  };
}

export function inputChange(keyWord) {
  return {
    type: INPUT_CHANGE,
    keyWord,
  };
}

export function fetchCommitsStart() {
  return {
    type: FETCH_COMMITS_START,
  };
}

export function fetchCommitsSuccess(commits) {
  return {
    type: FETCH_COMMITS_SUCCESS,
    commits,
  };
}

export function fetchCommitsError(error) {
  return {
    type: FETCH_COMMITS_ERROR,
    error,
  };
}
