const API_URL = (process.env.REACT_APP_API_URL || 'http://localhost:5000/api').replace(/\/$/, '');
const TOKEN_KEY = 'portfolio_admin_token';

const hasLiveToken = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  return Boolean(token && token !== 'demo-session');
};

const contentBody = (body) => {
  if (body instanceof FormData) return body;
  if (!body?.imageFile) return JSON.stringify(body);
  const form = new FormData();
  Object.entries(body).forEach(([key, value]) => {
    if (key === 'imageFile') form.append('image', value);
    else if (Array.isArray(value)) form.append(key, value.join(','));
    else if (value !== undefined && value !== null) form.append(key, String(value));
  });
  return form;
};

const request = async (path, options = {}) => {
  const token = localStorage.getItem(TOKEN_KEY);
  const isForm = options.body instanceof FormData;
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      ...(isForm ? {} : { 'Content-Type': 'application/json' }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });
  const payload = response.status === 204 ? null : await response.json().catch(() => null);
  if (!response.ok) throw new Error(payload?.message || `Request failed (${response.status})`);
  return payload;
};

export const auth = {
  get token() { return localStorage.getItem(TOKEN_KEY); },
  login: async (credentials) => {
    const data = await request('/auth/login', { method: 'POST', body: JSON.stringify(credentials) });
    localStorage.setItem(TOKEN_KEY, data.token);
    return data;
  },
  demoLogin: () => localStorage.setItem(TOKEN_KEY, 'demo-session'),
  logout: () => localStorage.removeItem(TOKEN_KEY),
};

export const api = {
  request,
  projects: {
    list: () => request(hasLiveToken() ? '/admin/projects' : '/projects'),
    create: (body) => request('/admin/projects', { method: 'POST', body: contentBody(body) }).then(data => data.item),
    update: (id, body) => request(`/admin/projects/${id}`, { method: 'PUT', body: contentBody(body) }).then(data => data.item),
    remove: (id) => request(`/admin/projects/${id}`, { method: 'DELETE' }),
  },
  posts: {
    list: () => request(hasLiveToken() ? '/admin/blogs' : '/blogs'),
    create: (body) => request('/admin/blogs', { method: 'POST', body: contentBody(body) }).then(data => data.item),
    update: (id, body) => request(`/admin/blogs/${id}`, { method: 'PUT', body: contentBody(body) }).then(data => data.item),
    remove: (id) => request(`/admin/blogs/${id}`, { method: 'DELETE' }),
  },
  messages: {
    list: () => request('/admin/contacts'),
    create: (body) => request('/contacts', { method: 'POST', body: JSON.stringify(body) }),
    update: (id, body) => request(`/admin/contacts/${id}`, { method: 'PATCH', body: JSON.stringify(body) }),
    reply: (id, body) => request(`/admin/contacts/${id}/reply`, { method: 'POST', body: JSON.stringify({ reply: body.reply || body.message }) }),
  },
  settings: {
    get: () => request('/settings').then(data => data.item || data),
    update: (body) => request('/admin/settings', { method: 'PUT', body: JSON.stringify(body) }).then(data => data.item),
  },
};

export { API_URL };
