import axios from 'axios';

const urlApiGitHub = 'https://api.github.com';

const axiosCommits = axios.create({
  baseURL: urlApiGitHub,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { axiosCommits };
