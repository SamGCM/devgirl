import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
}
// if a Firebase instance doesn't exist, create one
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseCredentials)
}

const auth = firebase.auth()

export { firebase, auth }