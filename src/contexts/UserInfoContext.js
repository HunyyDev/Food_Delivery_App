import { doc, getDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { db } from '../firebase-config';
import { AuthContext } from './AuthContext';

export const UserInfoContext = React.createContext();

const UserInfoProvider = ({ children }) => {
    var docRef;
    const [userData, setUserData] = useState({});
    const user = useContext(AuthContext);
    async function readDoc() {
        try {
            const snapshot = await getDoc(docRef);
            console.log('waited')
            const myData = snapshot.data();
            console.log(myData);
            setUserData(myData);
            console.log(userData);
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        if (user) {
            docRef = doc(db, 'UserInfo/' + user.uid);
            readDoc();
        }
    }, [user]);

    return (
        <UserInfoContext.Provider value={userData}>
            {children}
        </UserInfoContext.Provider>
    )
};

export default UserInfoProvider;
