import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Post from './pages/post';
import './app.css'

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path = "/" component ={Home}></Route>
                <Route path = "/:id" component={Post}></Route>
            </Switch>
        </div>
    )
}

export default App;