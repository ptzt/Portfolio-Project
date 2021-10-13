import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './pages/main'
import Talk from './pages/talk'
import About from './pages/about'
import Navb from './components/navbar'
import NotFoundPage from './pages/404';

ReactDOM.render(
  <React.StrictMode>
    <Router > 
    <Navb />

    <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/about" component={About} />
    <Route exact path="/talk" component={Talk} />
    <Route component={NotFoundPage} />
    </Switch>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
