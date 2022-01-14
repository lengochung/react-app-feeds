import React from 'react'
import HeaderAdmin from './HeaderAdmin';
import FooterAdmin from './FooterAdmin';
import MainAdmin from './MainAdmin';
import BlogsAdmin from './BlogsAdmin';
import UsersAdmin from './UsersAdmin';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Realtime from './scrypts/realtime';
export default function Admin() {
    return (
        <div>
            <Router>
                <div className="">
                    <div className="row">
                        <div className="col-2 border-right bg-dark">
                            <HeaderAdmin/>
                        </div>
                        <div className="col-10">
                            <Nav />
                            <Switch>
                                <Route path="/" exact component={MainAdmin}/>
                                <Route path="/blogs" component={BlogsAdmin} />
                                <Route path="/users" component={UsersAdmin} />
                            </Switch>
                            <FooterAdmin />
                        </div>
                    </div>
                </div>
                <Realtime />
            </Router>
        </div>
    )
}
