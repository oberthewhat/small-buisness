import React from 'react'
import { Switch, Route } from 'react-router'
import Listings from './containers/listings'
import Details from './containers/detials'
import Access from './containers/access'

const Router = () => {
    return (
        <Switch>
            <Route path="/Listings" component={Listings} />
						<Route path="/place/:id" component={Details} />
						<Route path="/access" component={Access} />


        </Switch>
    );
};

export default Router;