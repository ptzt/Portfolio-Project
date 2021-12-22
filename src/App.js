import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './pages/main'
import Talk from './pages/talk'
import About from './pages/about'
import Navb from './components/Navbar'
import NotFoundPage from './pages/404';
import  "./App.css"



export default function App() {
    return (
        <div className="App-Main">
        <Router > 
        <Navb />
        <Switch>
            <Route
            className="Main-page" 
            exact path="/" 
            component={Main} 
            />
            <Route 
            exact path="/about" 
            component={About}
            />
            <Route 
            exact path="/talk" 
            component={Talk} 
            />
            <Route 
            component={NotFoundPage} 
            />
        </Switch>
        </Router>
        </div>
    )
}