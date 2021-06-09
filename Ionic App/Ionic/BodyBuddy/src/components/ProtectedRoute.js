import React from "react";

import { Route, Redirect } from "react-router-dom";
import { checkLoginStatus } from '../functions';

export const ProtectedRoute = ( { component: Component, ...rest } ) => {
	return (
		<Route {...rest} render= { props => {
			if ( !checkLoginStatus() ) {
				return ( 
					<Redirect to={
						{ 
							pathname: "/login",
							state: {
								from: props.location
							}
						}
					} />
				);
			} else {
				return <Component {...props} />;
			};
		} } />
	);
};
