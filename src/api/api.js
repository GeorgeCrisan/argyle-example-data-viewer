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

  async getData({ accountId, userId, endpoint }) {
    const idObj = accountId ? { account: accountId } : { user: userId }

    const resp = await this.api.get(endpoint, {
      params: {
        limit: 100,
        ordering: '-created_at',
        ...idObj
      }
    })
    return resp.data.results
  }

  getActivities({ accountId, userId }) {
    return this.getData({ accountId, userId, endpoint: '/activities' })
  }

  async getProfiles({ accountId, userId }) {
    return this.getData({ accountId, userId, endpoint: '/profiles' })
  }

  async getVehicles({ accountId, userId }) {
    return this.getData({ accountId, userId, endpoint: '/vehicles' })
  }

  async getDocuments({ accountId, userId }) {
    return this.getData({ accountId, userId, endpoint: '/documents' })
  }

  async getIncomes({ accountId, userId }) {
    return this.getData({ accountId, userId, endpoint: '/incomes' })
  }

  async getCareers({ accountId, userId }) {
    return this.getData({ accountId, userId, endpoint: '/careers' })
  }

  async getReputations({ accountId, userId }) {
    return this.getData({ accountId, userId, endpoint: '/reputations' })
  }
}

export default new Api()
