import React from 'react';

// loading icon
import RenderingIcon from './components/RenderingIcon'

// css
import './App.css';
import './scss/styles.scss';

// To code-splitting
import Loadable from 'react-loadable';

const AsyncComponent = Loadable({
    loader: () => import(/* webpackChunkName: "myNamedChunk" */ './Route.js'),
    loading: () => <RenderingIcon/>,
    modules: ['myNamedChunk']
});

export default class App extends React.Component {


    render() {

        return (
                <div className="App">
                    <AsyncComponent/>
                </div>
        );

    }
}
