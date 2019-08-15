import * as firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyANs3x8KMVqFB_hLojudo9mhhhVcJGKVGY",
  authDomain: "red-pickup-manager.firebaseapp.com",
  databaseURL: "https://red-pickup-manager.firebaseio.com",
  projectId: "red-pickup-manager",
  storageBucket: "",
  messagingSenderId: "763715386461",
  appId: "1:763715386461:web:80bfdec4e695ca12"
};

firebase.initializeApp({
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  projectId: config.projectId
});

export const save = (collection, data) => {
  firebase
    .firestore()
    .collection(collection)
    .add(data);
};

export const get = collection =>
  firebase
    .firestore()
    .collection(collection)
    .get();
