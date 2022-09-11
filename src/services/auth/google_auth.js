import Firebase from './../../plugins/firebase';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


export default class GoogleAuthService {
    constructor() {
        this.provider = new GoogleAuthProvider();
    }
    
    auth() {
        signInWithPopup(
            Firebase.auth(),
            this.provider
        )
    }

    logout() {
        Firebase.auth().signOut();
    }
}

