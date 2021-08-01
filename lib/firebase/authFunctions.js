import Firebase from './firebase.config.js';

export const createUser = (email, password, callback) => {
  Firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      callback();

      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      return error;
      // ..
    });
};

export const loginUser = (email, password) => {
  Firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      let user = userCredential.user;

      return { user, error: false };
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      return error;
    });
};

export const logoutUser = (router) => {
  Firebase.auth()
    .signOut()
    .then(() => {
      router.push('/login');
    })
    .catch((error) => {
      console.log(error);
    });
};
