import firebase from 'firebase'
import uuid from 'uuid/v4'

var config = {
    apiKey: "AIzaSyA_7-iZBHH_A_NamrCUR_ILD0Lx8FYRNrU",
    authDomain: "nauka-react-9137b.firebaseapp.com",
    databaseURL: "https://nauka-react-9137b.firebaseio.com",
    projectId: "nauka-react-9137b",
    storageBucket: "nauka-react-9137b.appspot.com",
    messagingSenderId: "973196382218"
};
firebase.initializeApp(config);

const database = firebase.database().ref(`/`);
export default database;

export const testAdd = (data) => {
    const id = uuid();
    database.ref('/'+id).set({
        data, id
    })
}

export const testRemove = (id) => {
    database.ref(`/${id}`).remove()
    }