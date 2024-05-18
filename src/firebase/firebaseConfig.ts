// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_KEY_FIREBASE,
  authDomain: 'xcteam-1d3f3.firebaseapp.com',
  projectId: 'xcteam-1d3f3',
  storageBucket: 'xcteam-1d3f3.appspot.com',
  messagingSenderId: '927209215044',
  appId: '1:927209215044:web:ef5d4c271ee31dc3651811',
  measurementId: 'G-KZWBB8QVCL',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
