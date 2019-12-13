import React from 'react';
import { Route } from 'react-router';


import Intro from '../components/Intro';


 
export default (
    <Route>
<Route exact={true} path="/">
                            <Intro></Intro>
                        </Route>
                        <Route
                            path="/log"></Route>

                        <Route path="/:title" render={props => <LongThought {...props}/>}></Route>

    </Route>
);