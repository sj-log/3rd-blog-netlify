import React from 'react';

// components
import Helmet from './components/Helmet';
import Intro from './components/Intro';
import Nav from './components/Nav';
import LongThoughts from './components/LongThoughts';
import LongThought from './components/LongThought';

// routing
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// css
import './App.css';
import './scss/styles.scss';

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

export default class App extends React.Component {

    componentDidMount() {
        ReactGA.pageview(window.location.pathname);
    }

    render() {

        return (
            <Router history={history}>
                <div className="App">
                    <header className="header">
                        <Helmet/>

                        <Nav/>
                    </header>

                    <Switch>
                        <Route exact={true} path="/">
                            <Intro></Intro>
                        </Route>
                        {/* <Route
                            path="/log" render={props => <LongThoughts {...props}/>}></Route> */}

                        <Route path="/log" component={props => <LongThoughts {...props}/>}></Route>

                        <Route
                            exact={true}
                            path="/:title"
                            component={props => <LongThought {...props}/>}></Route>

                    </Switch>
                </div>
            </Router>
        );

    }
}
