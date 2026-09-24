import axios from 'axios';

const BASE_URL = 'https://forum-api.dicoding.dev/v1';

const api = axios.create({
  baseURL: BASE_URL,
});

function putAccessToken(token) {
  localStorage.setItem('accessToken', token);
}

function getAccessToken() {
  localStorage.getItem('accessToken');
}

api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

//Fetch
async function register({ name, email, password }) {
  const response = await api.post('/register', { name, email, password });
  return response.data.data.user;
}

async function login({ email, password }) {
  const response = await api.post('/login', { email, password });
  return response.data.data.token;
}

async function getOwnProfile() {
  const response = await api.get('/users/me');
  return response.data.data.user;
}

async function getAllUsers() {
  const response = await api.get('/users');
  return response.data.data.users;
}

async function getAllThreads() {
  const response = await api.get('/threads');
  return response.data.data.threads;
}

async function getDetailThread(id) {
  const response = await api.get(`/threads/${id}`);
  return response.data.data.detailThread;
}

async function createThread({ title, body, category = '' }) {
  const response = await api.post('/threads', { title, body, category });
  return response.data.data.thread;
}

async function createComment({ threadId, content }) {
  const response = await api.post(`/threads/${threadId}/comments`, { content });
  return response.data.data.comment;
}

export {
  putAccessToken,
  getAccessToken,
  register,
  login,
  getOwnProfile,
  getAllUsers,
  getAllThreads,
  getDetailThread,
  createThread,
  createComment,
};