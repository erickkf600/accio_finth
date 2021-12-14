import React from 'react'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import Menu from '../components/Menu'
import Header from '../components/Header'
import { Pages } from './pages'
import RouteSwitching from './routes-switching'

const Routing = () => {
    const isLogged: boolean = true
    return (
        <BrowserRouter>
            {isLogged && (
                <>
                    <Menu /> <Header />
                </>
            )}
            <div className="content">
                <section className="page-content">
                    <Switch>
                        {RouteSwitching(Pages)}
                        <Redirect from="/" to="/home" />
                        <Redirect from="*" to="/home" />
                    </Switch>
                </section>
            </div>
        </BrowserRouter>
    )
}
export default Routing
