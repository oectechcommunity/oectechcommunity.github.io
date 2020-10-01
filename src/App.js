import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import HomePage from './pages/Home';
import MembersPage from './pages/Members';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route path="/members" component={MembersPage}></Route>
            </Switch>
        </div>
    );
};

export default App;
