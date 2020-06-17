import axios from 'axios';
import FormateDate from '../../scripts/utils/utils';

/* const AxiosApiNews = axios.create({
    apiUrl: baseURL,
  language: 'ru',
  fromDate: `${fromDateIco}`,
  toDate: `${toDateIco}`,
  sortBy: 'popularity',
  pageSize: '100',
  apiKey: '60659df53b2641f4bc17059b6e641af7',
  headers: {
    'Content-Type': 'application/json',
  },
}); */

const axiosCommits = axios.create({
  user: 'opv1',
  repository: 'yp-graduate-work',
  headers: {
    'Content-Type': 'application/json',
  },
});

console.log(axiosCommits);

export { axiosCommits };
