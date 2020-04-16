import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var FirebaseConfig = {
  apiKey: "AIzaSyAJDdWdPSXRxTukWUhYqrLh44HqBCXl4F4",
  authDomain: "hardware-web.firebaseapp.com",
  databaseURL: "https://hardware-web.firebaseio.com",
  projectId: "hardware-web",
  storageBucket: "hardware-web.appspot.com",
  messagingSenderId: "762528731852",
  appId: "1:762528731852:web:46def58e7b0c6606136869",
  measurementId: "G-19KQ1NJ1N2",
};

firebase.initializeApp(FirebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};
const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
