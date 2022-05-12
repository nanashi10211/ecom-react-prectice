// import firebase from "firebase/app";

// import "firebase/firestore";
// import "firebase/auth";

// const config = {
//     apiKey: "AIzaSyA-pcaajGSAG2v-0FGCygydiDaEczRRA7I",
//     authDomain: "r-e-com.firebaseapp.com",
//     projectId: "r-e-com",
//     storageBucket: "r-e-com.appspot.com",
//     messagingSenderId: "557086331045",
//     appId: "1:557086331045:web:9a8649dfc3a08f7cbafd4c",
//     measurementId: "G-X60PJK8G9J"
  
//   };

//   firebase.initializeApp(config);

//   export const auth = firebase.auth();
//   export const firestore = firebase.firestore();

//   const provider = new firebase.auth.GoogleAuthProvider();

//   provider.setCustomParameters({ prompt: 'select_account' });

//   export const signInWithGoogle  = () => auth.signInWithPopup(provider);

//   export default firebase;

import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {initializeApp} from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyA-pcaajGSAG2v-0FGCygydiDaEczRRA7I",
    authDomain: "r-e-com.firebaseapp.com",
    projectId: "r-e-com",
    storageBucket: "r-e-com.appspot.com",
    messagingSenderId: "557086331045",
    appId: "1:557086331045:web:9a8649dfc3a08f7cbafd4c",
    measurementId: "G-X60PJK8G9J"
  
  };
export const TOKEN =  {
    "type": "service_account",
    "project_id": "r-e-com",
    "private_key_id": "a151de34f99293dbeafa5466b942fbb43981894b",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCsb/3upcwfARpG\nPWgFxlAbh26ObicvkH7OfAEUTnzamKnYMI93sJDTOEbRhfR/9+MPNZWdxoNqemEB\n3Rwkp7JhvrXOXYsafv7yo/y4xqPBRjG7ouRKK9LLKj9FxUcfEAT/Mku9ElOkJ6tA\nb0NmZvVhzVCieKFq8zk5jvznfxzFIzyfnbG2bOd4x90Wv9mJylbnOnDCH7rgUBgd\nEafecNyaUJoj20txhxxDs2CmyyOuQZn9iSic2qUrjAlZN/Jvq0ntCFWgKf0jcBXY\nng+/kjt5UoH0FCCKoitWwsAKilG9lwKHNU1cEgHrr90RDnY5Y3mC0JpwPX8JNU+w\njM+dfoKPAgMBAAECggEAIfcpUJGt5EmGUGGWFNUcQF/r4fhGlbLjl26Lk+Fl7HT3\nt5LRH6VS0ZgbMvgs0ewU+JD4eIx6pEWYyBIykfHKTECRdSWt2bk8JLUyeX7/EHnw\nH+KVDxsUuVoH/ok+WhsAsPfKPWLXwNTjgZyo7QnIucwEXwxd10AzfGfy3vKFyzqz\nyaD4gM3GSv9iE0qEFSSAPt/1a1oRkkwObreDHdp4xuv1Me+JjiFwJalvnlFaV9Ip\nVfl0FaE7nE/E3FSTtcykCpSdYjTVxu7HOP/R4cqOUsUfFgleiRtYULnviO39/P6r\nAajdJdj+LxiTL8FzWTrt0fTyWrC0tUf2LpUmIxOyoQKBgQDZ9Sch6k38qgThiX/Y\nuLv4yBS4Ht2V4YnMD+XV8vn7gXLL0SX+hno0ZdqkjgCq++HRUOxNxpy66rf8il52\nfCXvnNce6ik69u3jcVg3J6xshC6QrntLnjOSnQXMwgDCZeNH0NklI4E9tqUKThjB\n9bpPsUyhfOShR8v4yyk16jnF/wKBgQDKiOTR9V0vXk5GZqCIoH96CVQ9PgfXr6z1\nUInh4Ggh25fwRq0PkTcuIFQtjjs87BzFepApZ/l5GxocJ8N9nA8GC+F+SPeTttHV\n6lsRVoF7AYaqJ4EQDPAGpeboZhNE1lm3QVbOeJPcBcob1SwFAM34C2g+DKaEW2ge\n3MGGspPjcQKBgQCb/wSFF6e9oQphSgJA4OdYhgueRCkgLw5rCS3c1UzqH5pEGmtx\nIlqwyf2VLTV5K1JSd/LJL8/ZUEli7L3zW6PjPYQSUlI0K6vTz7ntr+2OtYSGdPs2\nAgKzesM969STTk0/h1EDbcgAnYq+N2ss120DwMgyBKu2ayan6PCT8BJtjQKBgQCn\n5DkCz0oS9TMf6v0SpTFnQYqCRgSMSEWxCbVy9+p6fqWB+aSGbhN2+jetl+UFSJlF\nHqeYm2dTfCL1ygSlAJP3qCuh2uzYl0l08ZPSWIp3JDm0nZDAdGkYqbgzWEKK4sF2\nRwSlnZC8aFQ1JE4cS6FyCEq+fRAgUgGK6+bFOQ2dEQKBgHKJ3GSa3+AOpyB3GHd+\nXM2vyB35fo6+ZcOUStVQhhR253Fz/nsONgM/ca+h0pECPc3Z8xyjKZNtDMiqU3St\nzMkr8U1V7yPpNUp5wl/6nMNQ9qQhlHtisilXa1w255LIZNzEURlzSAJQWn9rpjZy\n1qGkQUzG0pAB9qeI3X6P1Qy3\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-skcnd@r-e-com.iam.gserviceaccount.com",
    "client_id": "118044680447816776936",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-skcnd%40r-e-com.iam.gserviceaccount.com"
  }
  
  export const app = initializeApp(config);
  export const db = getFirestore(app);
  export const auth = getAuth();
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

  export const signInWithGoogle = () => signInWithPopup(auth, provider)
  .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // the signed-in user info
      const user = result.user;
  }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      // the email of user's account used
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
  });

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const docRef = doc(db, "users", `${userAuth.uid}`);
    const docSnap = await getDoc(docRef);

    if(!docSnap.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(docRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(error) {
            console.log("Error creating user ", error.message);
        }
    }

    return docRef;

  }