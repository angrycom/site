import firebase from "firebase"
import "firebase/app"
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyBk_HDG0eJq16Hi6U2cFdWnYxiJB1P9gK8",
  authDomain: "angrycom.firebaseapp.com",
  databaseURL: "https://angrycom.firebaseio.com",
  projectId: "angrycom",
  storageBucket: "",
  messagingSenderId: "430487389488",
  appId: "1:430487389488:web:4b4d085c3b17b36150f4f5",
}

firebase.initializeApp(firebaseConfig)
const database = firebase.database()

export async function orderSticker({
  name,
  phone,
  email,
  amount,
  grade,
  schoolClass,
}) {
  await database.ref(`stickers/${grade}-${schoolClass} ${name}`).set({
    name,
    phone,
    email,
    amount,
    grade,
    class: schoolClass,
  })
}
