import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import Gallery from './Gallery';
import Resume from './Resume';





const main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/Blog" component={Blog} />
        <Route  path="/Gallery" component={Gallery} />
        <Route  path="/Resume" component={Resume} />
    </Switch>
)
 export default main;