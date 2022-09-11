import { onValue, ref, set, update, get, child } from "firebase/database";
import Firebase from "../../plugins/firebase";

export default class DatabaseService {
    constructor() {
        this.database = Firebase.database()
    }

    write(key, data, onSuccess = () => {}, onError = () => {}) {
        set(
            ref(this.database, key),
            data
        ).then(onSuccess).catch(onError)
    }

    read(key, callback, onError = () => {}) {
        get(
            child(
                ref(this.database), key
            ),
        ).then(callback).catch(onError)
    }

    listen(key, callback) {
        onValue(
            ref(this.database, key),
            (snapshot) => callback(snapshot)
        )
    }

    update(mapping) {
        update(
            ref(this.database),
            mapping
        )
    }
}