import React from 'react';

// components
import Helmet from './components/Helmet';
import Intro from './components/Intro';
import Nav from './components/Nav';
import LongThoughts from './components/LongThoughts';
import LongThought from './components/LongThought';
import About from './components/About';
import SmallThought from './components/SmallThought';

// routing
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


// css
import './App.css';
import './scss/styles.scss';

// google analytics components
import { createBrowserHistory } from "history";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-116676814-1');

const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});


export default class App extends React.Component {

    componentDidMount(){
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
                        <Route path="/about">
                            <About></About>
                        </Route>
                        <Route path="/small-thought">
                            <SmallThought></SmallThought>
                        </Route>

                        <Route
                            path="/log" render={props => <LongThoughts {...props}/>}></Route>

                        <Route exact={true} path="/:title" render={props => <LongThought {...props}/>}></Route>

                    </Switch>
                </div>
            </Router>
        );

    }
}
