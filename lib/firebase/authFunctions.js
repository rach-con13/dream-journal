import Firebase from "./firebase.config.js";

export const createUser = (email, password) => {
  Firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
};

export const loginUser = (email, password) => {
  Firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      let user = userCredential.user;
      console.log(user);
      return { user, error: false };
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      return { code: errorCode, message: errorMessage, error: true };
    });
};
