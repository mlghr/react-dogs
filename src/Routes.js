import React from 'react';
import {
  Switch,
  Routes,
  Redirect
} from 'react-router-dom';

function Routes({dogs}) {
    return (
        <Switch>
            <Route exact path="/dogs"></Route>
        </Switch>
    )
}

export default Routes;
