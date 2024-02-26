import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABAS_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
    /*apiKey: 'AIzaSyAbE91fuBZaiCfvv9X461VEpyfY4NWikJ0',
    authDomain: 'market-1a512.firebaseapp.com',
    databaseURL: 'https://market-1a512-default-rtdb.firebaseio.com',
    projectId: 'market-1a512',
    storageBucket: 'market-1a512.appspot.com',
    messagingSenderId: '1019800640891',
    appId: '1:1019800640891:web:ff6978c473ec0e13e7f1de',
    measurementId: 'G-ZLQPY6MXHH',*/
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const database = firebaseApp.database()
export const ref = database.ref('products')
