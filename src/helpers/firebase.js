// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'
// Add the Firebase products that you want to use
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_ARGYLE_FIREBASE_API_KEY,
  databaseURL: process.env.REACT_APP_ARGYLE_FIREBASE_DATABASE_URL,
  authDomain: process.env.REACT_APP_ARGYLE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_ARGYLE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_ARGYLE_FIREBASE_STORAGE_BUCKET
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
