import { isAuthenticated } from "../../../modules/auth/permissionChecker";
import React from "react";
import { Redirect, Route } from "react-router-dom";

console.log("PublicRoute: " + isAuthenticated());
const PublicRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: props.location }
                    }}
                />
            ) : (
                <Component {...props} />
            )
        }
    />
);

export default PublicRoute;
