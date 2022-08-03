import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
//   };

const firebaseConfig = {
  apiKey: 'AIzaSyDPmPqbZakJBkCYplgSHOYMUnyQU1SJwc0',
  authDomain: 'fire-contact-app-572e4.firebaseapp.com',
  databaseURL: 'https://fire-contact-app-572e4-default-rtdb.firebaseio.com',
  projectId: 'fire-contact-app-572e4',
  storageBucket: 'fire-contact-app-572e4.appspot.com',
  messagingSenderId: '550814411916',
  appId: '1:550814411916:web:6de3bfbe2be29d9de39fa9',
};

const firebase = initializeApp(firebaseConfig);
export default firebase;
