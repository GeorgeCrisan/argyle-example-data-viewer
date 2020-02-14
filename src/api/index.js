import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

const DEFAULT_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export const signIn = async ({ email, password }) => {
  const resp = await axios.post(
    '/tokens',
    {
      username: email,
      password
    },
    {
      baseURL: API_URL,
      timeout: 5000,
      headers: {
        ...DEFAULT_HEADERS
      }
    }
  )

  const prom = () =>
    new Promise(resolve => {
      localStorage.setItem('userToken', resp.data.access)
      resolve()
    })

  await prom()
  return resp.data.access
}
