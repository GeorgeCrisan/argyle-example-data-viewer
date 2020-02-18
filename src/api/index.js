export const signIn = ({ email, password }) => {
  localStorage.setItem('clientID', email)
  localStorage.setItem('clientSecret', password)
}
