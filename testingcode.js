

import { signInWithEmailAndPassword } from 'firebase/auth/react-native';
import { doc, getDoc } from 'firebase/firestore';
import React, { useContext } from 'react';
import { Image, Text, View } from 'react-native';
import { db, auth } from './src/firebase-config';
import UserDataProvider, { UserDataContext } from './src/contexts/UserDataContext';


//this is how to parsing data from a json file
export const data = require('./product-data.json');

const something = doc(db, 'UserInfo/psb48TZPVuQuMLzPWrnb64MZya72')

async function readDoc() {
    const user = await signInWithEmailAndPassword(auth, '123456@gmail.com', '123456');
    console.log(user);
    const snapshot = await getDoc(something);
    if (snapshot.exists()) {
        const myData = snapshot.data();
        console.log(myData);
    }
}

const Test = () => {
    const obj = useContext(UserDataProvider);
    console.log(obj);

    return (
        <Text>aaa</Text>
    )
};

export default Test;
