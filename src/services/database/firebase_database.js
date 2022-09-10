import { onValue, ref, set, update } from "firebase/database";
import Firebase from "../../plugins/firebase";

export default class DatabaseService {
    constructor() {
        this.database = Firebase.database()
    }

    write(key, data) {
        set(
            ref(this.database, key),
            data
        )
    }

    read(key, callback) {
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