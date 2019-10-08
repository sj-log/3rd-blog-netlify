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
                        <Route exact path="/long-thought" render={props => <LongThoughts {...props} />}>
                        </Route>
                        <Route path="/long-thought/:title" render={props => <LongThought {...props} />}>
                        </Route>
                        <Route path="/portfolio">
                        <div><h1>Still in processing.</h1>
                        <img src="https://i.pinimg.com/originals/f1/9a/10/f19a1096fdd128ed940502a684133cb5.gif"></img></div>
                        </Route>
                        <Route path="/book-review" >
                        <div><h1>Still in processing.</h1>
                        <img src="https://i.pinimg.com/originals/5c/49/eb/5c49ebe10c8b9b3b1f019d7550636529.gif"></img></div>
                        </Route>

                    </Switch>
                </div>
            </Router>
        );

    }
}
