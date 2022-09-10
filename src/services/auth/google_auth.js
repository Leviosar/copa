import Firebase from './../../plugins/firebase';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import store from '../../store';


export default class GoogleAuthService {
    constructor() {
        this.provider = new GoogleAuthProvider();
    }
    
    auth() {
        signInWithPopup(
            Firebase.auth(),
            this.provider
        ).then((result) => {
            let user = result.user;
            store.dispatch('user/authenticated', user)
        })
        .catch((err) => {
            console.log(err); // This will give you all the information needed to further debug any errors
        });
    }
}

