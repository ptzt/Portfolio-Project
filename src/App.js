import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './pages/main'
import Contact from './pages/contact'
import About from './pages/about'
import Navb from './components/navbar'
import NotFoundPage from './pages/404';
import  "./App.css"



export default function App() {
    return (
        <div className="App-Main">
        <Router > 
        <Navb />
        <Switch>
            <Route 
            exact path="/" 
            component={Main} 
            />
            <Route 
            exact path="/about" 
            component={About}
            />
            <Route 
            exact path="/contact" 
            component={Contact} 
            />
            <Route 
            component={NotFoundPage} 
            />
        </Switch>
        </Router>
        </div>
    )
}