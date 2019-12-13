import React from 'react';
import { Route } from 'react-router';
 
export default (
    <Route>
	<Route path='/' />
    <Route path='/log/' />
	<Route path='/:title' />
    </Route>
);