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
} from '../actions/actionType'

const initialState = {
  typeLayout: null,
  color: null,
  boxShadow: null,
  loading: false,
  error: false,
  typeError: null,
  result: false,
  news: {},
  fromVisible: 0,
  toVisible: 3,
  plusVisible: 3,
  analytics: {},
  keyWord: '',
  commits: [],
}

export function layoutReducer(state = initialState, action) {
  switch (action.type) {
    case STYLES_LAYOUT:
      return {
        ...state,
        typeLayout: action.typeLayout,
        color: action.color,
        boxShadow: action.boxShadow,
      }
    default:
      return state
  }
}

export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case INITIAL_NEWS:
      return {
        ...state,
        result: true,
        news: action.news,
        analytics: action.analytics,
        keyWord: action.keyWord,
      }
    case FETCH_NEWS_START:
      return { ...state, loading: true, error: false, result: false }
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        result: true,
        news: action.news,
      }
    case FETCH_NEWS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        typeError: action.typeError,
      }
    case MORE_NEWS:
      return {
        ...state,
        toVisible: state.toVisible + state.plusVisible,
      }
    case INPUT_CHANGE:
      return {
        ...state,
        keyWord: action.keyWord,
      }
    default:
      return state
  }
}

export function aboutReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMITS_START:
      return { ...state, loading: true }
    case FETCH_COMMITS_SUCCESS:
      return { ...state, commits: action.commits }
    case FETCH_COMMITS_ERROR:
      return { ...state, error: action.error }
    default:
      return state
  }
}
