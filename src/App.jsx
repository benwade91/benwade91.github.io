import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

let App = () => {

    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route exact path="/projects" component={Project} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/resume" component={Resume} />
                    {/* <Route component={NoMatch} /> */}
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default App;