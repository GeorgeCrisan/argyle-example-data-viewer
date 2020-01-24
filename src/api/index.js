export const signIn = ({ clientId, clientSecret }) => {
  localStorage.setItem('clientID', clientId)
  localStorage.setItem('clientSecret', clientSecret)
}
