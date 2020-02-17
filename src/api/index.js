export const signIn = async ({ email, password }) => {
  const prom = () =>
    new Promise(resolve => {
      localStorage.setItem('clientID', email)
      localStorage.setItem('clientSecret', password)
      resolve()
    })

  return prom()
}
