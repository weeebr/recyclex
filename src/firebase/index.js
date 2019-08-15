import * as firebase from "firebase/app";
import "firebase/firestore";
import config from "./config";

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
