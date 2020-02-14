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
      timeout: 5000,
      headers: {
        ...DEFAULT_HEADERS,
        Authorization: `Bearer ${token}`
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

  async getActivities(accountId) {
    const resp = await this.api.get('/activities', {
      params: {
        limit: 100,
        ordering: '-created_at',
        account: accountId
      }
    })
    return resp.data.results
  }

  async getProfiles(accountId) {
    const resp = await this.api.get('/profiles', {
      params: {
        limit: 100,
        ordering: '-created_at',
        account: accountId
      }
    })

    return resp.data.results
  }

  async getVehicles(accountId) {
    const resp = await this.api.get('/vehicles', {
      params: {
        limit: 100,
        ordering: '-created_at',
        account: accountId
      }
    })
    return resp.data.results
  }

  async getDocuments(accountId) {
    const resp = await this.api.get('/documents', {
      params: {
        limit: 100,
        ordering: '-created_at',
        account: accountId
      }
    })
    return resp.data.results
  }

  async getIncomes(accountId) {
    const resp = await this.api.get('/incomes', {
      params: {
        limit: 100,
        ordering: '-created_at',
        account: accountId
      }
    })
    return resp.data.results
  }

  async getCareers(accountId) {
    const resp = await this.api.get('/careers', {
      params: {
        limit: 100,
        ordering: '-created_at',
        account: accountId
      }
    })
    return resp.data.results
  }

  async getReputations(accountId) {
    const resp = await this.api.get('/reputations', {
      params: {
        limit: 100,
        ordering: '-created_at',
        account: accountId
      }
    })
    return resp.data.results
  }
}

export default new Api()
