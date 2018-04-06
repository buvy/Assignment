import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Menu from "./Containers/Menu.Container";
import FoodDetail from './Containers/FoodDetails.Container'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/food/:id" component={FoodDetail}/>                                    
            <Route path="/" component={Menu}/>
        </Switch>
    </BrowserRouter>);