import React from "react"
import {
    BrowserRouter,
    Route,
    Switch
  } from 'react-router-dom'
import App from "../containers/App"

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
        </Switch>
    </BrowserRouter>
);

export default Router