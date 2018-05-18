import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    Link,
    Redirect,
    hashHistory,
    browserHistory
} from 'react-router';

import App from './views/App'
import HomeView from './views/HomeView';
import HotView from './views/HotView';
import DetailView from './views/DetailView';
import CartView from './views/CartView';
import MineView from './views/MineView';
import LoginView from './views/LoginView';
import RegView from './views/RegView';

import user from './gurad/user'
const RouterConfig=()=>(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={HomeView}></IndexRoute>
            <Route path='home' component={HomeView}/>
            <Route path='latest' component={HotView}/>
            {/*<Route path='product' component={DetailView}>*/}
                {/*<Route path=':id' component={DetailView}/>*/}
            {/*</Route>*/}
            <Route path='product/:id' component={DetailView}/>
            <Route path='cart' component={CartView}/>
            <Route path='mine' component={MineView} onEnter={user}/>
            <Route path='login' component={LoginView}/>
            <Route path='reg' component={RegView}/>
        </Route>


    </Router>
);
export default RouterConfig;