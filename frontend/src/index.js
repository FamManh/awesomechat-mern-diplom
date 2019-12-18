import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import {GlobalStyles} from './styles/globalstyles'
import {BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom'
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Forgot from './components/auth/Forgot';
import './i18n';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Suspense fallback={(<div>Loading ~~~</div>)}>
        <Router>
            <GlobalStyles/>
            
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                <Route exact path="/signup">
                    <Signup />
                </Route>
                <Route exact path="/signin">
                    <Signin />
                </Route>
                <Route exact path="/forgot">
                    <Forgot />
                </Route>
            </Switch>
        </Router>
    </Suspense>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
