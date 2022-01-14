import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import FooterUser from './FooterUser'
import HeaderUser from './HeaderUser'
import MainUser from './MainUser'
import BlogsUser from './BlogsUser'
import ProfileUser from './ProfileUser'
import Realtime from './scrypts/realtime'


export default function User() {
    return (
        <>
            <Router>
                <div className="container">
                    <HeaderUser />
                    <Switch>
                        {/* <Route path="/" exact component={MainUser}/> */}
                        <Route path="/" exact component={BlogsUser} />
                        <Route path="/profile" component={ProfileUser} />
                    </Switch>
                    <FooterUser />
                </div>
                <Realtime />
            </Router>
        </>
    )
}
