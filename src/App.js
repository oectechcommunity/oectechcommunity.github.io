import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import HomePage from './pages/Home';
import MembersPage from './pages/Members';
import M from 'materialize-css';

const App = () => {
    // const initial = () => {
    //     M.AutoInit();
    // };

    // useEffect(() => {
    //     initial();
    // }, [initial]);

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
