import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL
const AUTH = {
  username: process.env.REACT_APP_API_USERNAME,
  password: process.env.REACT_APP_API_PASSWORD
}
const DEFAULT_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: API_URL,
      timeout: 3000,
      headers: {
        ...DEFAULT_HEADERS
      },
      auth: {
        ...AUTH
      }
    })
  }

  async getUsers() {
    const resp = await this.api.get('/users', {
      params: {
        limit: 100,
        ordering: '-created_at'
      }
    })
    console.log(resp.data.results)
  }
}

export default new Api()