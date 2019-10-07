import React from 'react';
import './App.css';
import Helmet from './components/Helmet';
import Intro from './components/Intro';
import Nav from './components/Nav';
import LongThoughts from './components/LongThoughts';
import LongThought from './components/LongThought';
import About from './components/About';
import './scss/styles.scss';
import SmallThought from './components/SmallThought';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Logo from './components/Logo';



export default class App extends React.Component {
  
    render() {

        return (
            <Router>
                <div className="App">
                    <header className="header">
                        <Helmet/>
                        <Logo/>
                        <Nav/>
                    </header>

                    <Switch>
                        <Route exact path="/">
                            <Intro></Intro>
                        </Route>
                        <Route path="/about">
                            <About></About>
                        </Route>
                        <Route path="/small-thought">
                            <SmallThought></SmallThought>
                        </Route>
                        <Route exact path="/long-thought" render={LongThoughts}>
                        </Route>
                        <Route path="/long-thought/:title" render={props => <LongThought {...props} />}>
                        </Route>

                    </Switch>
                </div>
            </Router>
        );

    }
}
