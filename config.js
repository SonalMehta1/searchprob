import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCcrpOBQAbUqPg2PNp0ONFr4Hwcurzc3TI",
  authDomain: "wily-1d3aa.firebaseapp.com",
  databaseURL: "https://wily-1d3aa.firebaseio.com",
  projectId: "wily-1d3aa",
  storageBucket: "wily-1d3aa.appspot.com",
  messagingSenderId: "348137471836",
  appId: "1:348137471836:web:296e300b384af755030b99"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
