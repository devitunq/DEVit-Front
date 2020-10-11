import { Redirect, Route } from "react-router-dom";
import React from "react";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = () => { return localStorage.getItem('accessToken') != null };

  return (
    <Route
      {...rest}
      render={(props) => (isAuthenticated() ? <Component {...props} /> : <Redirect to={"/sign"} />)
      }
    />
  );
}