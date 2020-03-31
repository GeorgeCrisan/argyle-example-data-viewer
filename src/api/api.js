import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

const DEFAULT_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const AUTH = {
  username: localStorage.getItem('clientID'),
  password: localStorage.getItem('clientSecret')
}

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: API_URL,
      timeout: 5000,
      headers: {
        ...DEFAULT_HEADERS
      },
      auth: {
        ...AUTH
      }
    })
  }

  setAuthCredentials({ clientId, clientSecret }) {
    Object.assign(this.api.defaults, {
      auth: {
        username: clientId,
        password: clientSecret
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

  async getAccount(accountId) {
    const resp = await this.api.get(`/accounts/${accountId}`)
    return resp.data
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

  async getProfiles({ accountId, userId }) {
    const idObj = accountId ? { account: accountId } : { user: userId }

    const resp = await this.api.get('/profiles', {
      params: {
        limit: 100,
        ordering: '-created_at',
        ...idObj
      }
    })

    return resp.data.results
  }

  async getVehicles({ accountId, userId }) {
    const idObj = accountId ? { account: accountId } : { user: userId }

    const resp = await this.api.get('/vehicles', {
      params: {
        limit: 100,
        ordering: '-created_at',
        ...idObj
      }
    })
    return resp.data.results
  }

  async getDocuments({ accountId, userId }) {
    const idObj = accountId ? { account: accountId } : { user: userId }

    const resp = await this.api.get('/documents', {
      params: {
        limit: 100,
        ordering: '-created_at',
        ...idObj
      }
    })
    return resp.data.results
  }

  async getIncomes({ accountId, userId }) {
    const idObj = accountId ? { account: accountId } : { user: userId }

    const resp = await this.api.get('/incomes', {
      params: {
        limit: 100,
        ordering: '-created_at',
        ...idObj
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

  async getReputations({ accountId, userId }) {
    const idObj = accountId ? { account: accountId } : { user: userId }

    const resp = await this.api.get('/reputations', {
      params: {
        limit: 100,
        ordering: '-created_at',
        ...idObj
      }
    })
    return resp.data.results
  }
}

export default new Api()
