import React from 'react';

// components
import Header from './components/Header';
import Intro from './components/Intro';
import LongThoughts from './components/LongThoughts';
import LongThought from './components/LongThought';

// routing
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// google analytics components
import {createBrowserHistory} from "history";
import ReactGA from 'react-ga';
import window from 'global/window';

ReactGA.initialize('UA-116676814-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const history = createBrowserHistory();
history.listen(location => {
    ReactGA.set({page: location.pathname});
    ReactGA.pageview(location.pathname);
});

export default class RouteSet extends React.Component {

    componentDidMount() {
        ReactGA.pageview(window.location.pathname);
    }
    render() {

        return (
            <Router history={history}>
                <Header/>

                <Switch>
                    <Route exact={true} path="/">
                        <Intro/>
                    </Route>

                    <Route path="/log" component={props => <LongThoughts {...props}/>}></Route>

                    <Route
                        exact={true}
                        path="/:title"
                        component={props => <LongThought {...props}/>}></Route>

                </Switch>
            </Router>
        )
    }
}