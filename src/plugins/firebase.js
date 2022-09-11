import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

export default class Firebase {
    static instances = {
        app: null,
        auth: null,
        analytics: null,
        database: null,
    }

    static config = {
        apiKey: process.env.VUE_APP_API_KEY,
        authDomain: process.env.VUE_APP_AUTH_DOMAIN,
        projectId: process.env.VUE_APP_PROJECT_ID,
        storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
        appId: process.env.VUE_APP_APP_ID,
        measurementId: process.env.VUE_APP_MEASUREMENT_ID,
        databaseURL: process.env.VUE_APP_DATABASE_URL,
    }

    static app() {
        if (Firebase.instances.app === null) {
            Firebase.instances.app = initializeApp(Firebase.config)
        }

        return Firebase.instances.app
    }

    static auth() {
        if (Firebase.instances.auth === null) {
            Firebase.instances.auth = getAuth(Firebase.app())
        }

        return Firebase.instances.auth
    }

    static analytics() {
        if (Firebase.instances.analytics === null) {
            Firebase.instances.analytics = getAnalytics(Firebase.app())
        }

        return Firebase.instances.analytics
    }

    static database() {
        if (Firebase.instances.database === null) {
            Firebase.instances.database = getDatabase(Firebase.app())
        }

        return Firebase.instances.database
    }
}