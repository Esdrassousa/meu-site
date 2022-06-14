import React from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom'


import Home from './PAGES/Home'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' axact component={Home}></Route>
            </Switch>
        </BrowserRouter>
    )
}