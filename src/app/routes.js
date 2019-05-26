import React from 'react';
import { Route, Switch }  from 'react-router-dom';
import NotFound from "../views/notfound"
import Home from "../views/home"
import { Link } from "react-router-dom";

/**
 * Defines components to routes mapping.
 *
 * Everytime a new view is created, entry is required here to map the component to a specific route.
 *
 * [IMPORTANT]
 * All route entries are required to be done before the notFound component.
 *
 * @returns {XML}
 */
const Sep = () => <span> | </span>;


export default () => {
  return (
      <div>
          <div>
              <Link to="/">Home</Link> <Sep />
          </div>
    <Switch>

      <Route exact path="/" component={Home}/>

      <Route path="*" component={NotFound}/>
    </Switch>
    </div>
  );
}
