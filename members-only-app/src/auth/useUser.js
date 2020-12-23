import { useState, useEffect } from 'react';
import firebase from 'firebase/app';

export const useUser = () => {
    const [userInfo, setUserInfo] = useState(() => {//pass function to useState that returns userInfo object
        const user = firebase.auth().currentUser;
        const isLoading = !user;
        return { isLoading, user };
    });

    useEffect(() => {
        return firebase.auth().onAuthStateChanged(user => {
            setUserInfo({ isLoading: false, user });
        });
    }, []);

    return userInfo;
}
