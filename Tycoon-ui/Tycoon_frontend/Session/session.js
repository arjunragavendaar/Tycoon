import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
   
    const uid = user.uid;
    return user;
  
  } else {
    // User is signed out
    // ...
  }
});

//module.exports={sessionuser};