import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBPXELO8zLIo5dUzRh_E9xyaKOAekWH2nI",
    authDomain: "mi-message.firebaseapp.com",
    databaseURL: "https://mi-message.firebaseio.com",
    projectId: "mi-message",
    storageBucket: "mi-message.appspot.com",
    messagingSenderId: "217412695962",
    appId: "1:217412695962:web:aa48f356d2442f97476c23",
    measurementId: "G-4GJTHGTQJP"
})

db = firebaseApp.firestore()

export default db

