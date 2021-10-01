import React from 'react'
import Home from './pages/Home'
import {Redirect, Route, Switch} from 'react-router-dom'


function App() {
    return (
        <Switch>
            <Route path={'/'} component={Home} exact/>
            <Redirect to={'/'} from={'*'}/>
        </Switch>
    )
}


export default App
