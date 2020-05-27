import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomeView from '../containers/HomeView/HomeView'
import LoginView from '../containers/LoginView/LoginView';
import SignupView from '../containers/SignupView/SignupView';
import PatientsDashboard from '../containers/PatientsDashboard/PatientsDashboard';
import DoctorsDashboard from '../containers/DoctorsDashboard/DoctorsDashboard';

class NavRouter extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <HomeView />
                    </Route>
                    <Route path="/login">
                        <LoginView />
                    </Route>
                    <Route path="/signup">
                        <SignupView />
                    </Route>
                    <Route path="/signup">
                        <SignupView />
                    </Route>
                    <Route path="/patient/dashboard">
                        <PatientsDashboard />
                    </Route>
                    <Route path="/doctor/dashboard">
                        <DoctorsDashboard />
                    </Route>
                </Switch>
            </BrowserRouter >
        )
    }
}

export default NavRouter;