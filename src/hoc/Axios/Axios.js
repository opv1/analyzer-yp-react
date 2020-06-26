import axios from 'axios';

const urlApiGitHub = 'https://api.github.com';

export const axiosApiCommits = axios.create({
  baseURL: urlApiGitHub,
  headers: {
    'Content-Type': 'application/json',
  },
});
