export const signIn = ({ email, password }) =>
  new Promise(resolve => {
    localStorage.setItem('clientID', email)
    localStorage.setItem('clientSecret', password)
    resolve()
  })
