import { useState, useEffect } from 'react';
import firebase from 'firebase/app';

export const useUser = () => {
    const [userInfo, setUserInfo] = useState(() => {//pass function to useState that returns userInfo object
      //is used since the initial state needs to be calculated
        const user = firebase.auth().currentUser;
        const isLoading = !user;
        return { isLoading, user };
    });

    useEffect(() => {
        return firebase.auth().onAuthStateChanged(user => {//onAuthStateChanged will call its
          //callback function when the compoent is unmounted to unsubscribe the user
            setUserInfo({ isLoading: false, user });
        });
    }, []);

    return userInfo;
}
