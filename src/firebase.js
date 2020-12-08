import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initalizeApp({
    apiKey: process.env.apiKey,
    authDomain: process.env.auth,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
})