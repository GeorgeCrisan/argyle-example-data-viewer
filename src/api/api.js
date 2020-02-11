import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

const DEFAULT_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

class Api {
  constructor() {
    const token = localStorage.getItem('userToken')

    this.api = axios.create({
      baseURL: API_URL,
      timeout: 3000,
      headers: {
        ...DEFAULT_HEADERS,
        Authorization: `Bearer ${token}`
      }
    })
  }

  async signIn({ email, password }) {
    const resp = await axios.post(
      '/tokens',
      {
        username: email,
        password
      },
      {
        baseURL: API_URL,
        timeout: 3000,
        headers: {
          ...DEFAULT_HEADERS
        }
      }
    )

    localStorage.setItem('userToken', resp.data.access)
    return resp.data.access
  }

  async getUsers() {
    const resp = await this.api.get('/users', {
      params: {
        limit: 100,
        ordering: '-created_at'
      }
    })
    return resp.data.results
  }

  async getAccounts(userId) {
    const resp = await this.api.get('/accounts', {
      params: {
        user: userId,
        limit: 100,
        ordering: '-created_at'
      }
    })

    return resp.data.results
  }

  async getActivities(userId) {
    const resp = await this.api.get('/activities', {
      params: {
        limit: 100,
        ordering: '-created_at',
        user: userId
      }
    })
    return resp.data.results
  }

  async getProfiles(userId) {
    const resp = await this.api.get('/profiles', {
      params: {
        limit: 100,
        ordering: '-created_at',
        user: userId
      }
    })
    return resp.data.results[0]
  }
}

export default new Api()
