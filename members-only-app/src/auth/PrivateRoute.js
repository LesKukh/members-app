import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ isAuthed, isLoading, ...props }) => {//gatehr props into a spread parameter
    if (isLoading) {
      return <div>Loading...</div>;
    }
  //if user is not authorized redirect to Sign In page
    if (!isAuthed) {
      return <Redirect to='/sign-in' />
    }

    return (
      <Route {...props} />//if loaded and authorized pass spreaded props to Route
    );
}
