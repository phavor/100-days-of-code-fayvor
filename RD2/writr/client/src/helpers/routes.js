import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Import Helpers
import PrivateRoute from '../components/auth/PrivateRoute'

// import App from './components/App';
import Login from '../views/Login'
import Signup from '../views/Signup'
import Welcome from '../views/Welcome'
import Dashboard from '../views/Dashboard'
import AddPost from '../views/AddPost'
import NotFound from '../views/404'

const AppRoute = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={Signup} />
        <PrivateRoute isAuth={false} path="/dashboard" component={Dashboard} />
        <PrivateRoute isAuth={false} path="/add-post" component={AddPost} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  </Router>
)

export default AppRoute