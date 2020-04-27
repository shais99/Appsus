const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM


import Home from './pages/Home.jsx'
import Books from './pages/Books.jsx'
import Notes from './pages/NotesApp.jsx'
import Email from './pages/Email.jsx'
import { NavBar } from './cmps/NavBar.jsx'

export class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <header className="main-header flex align-center container space-between">
                        <div className="logo-container flex align-center">
                            <img className="logo-icon" src="assets/img/logo.png" alt="" />
                            <a href="index.html">
                                <h1 className="logo">Appsus</h1>
                            </a>
                        </div>
                        <NavBar />
                    </header>
                    <main className="fade-in">
                        <Switch>
                            <Route component={Books} path="/books" />
                            <Route component={Notes} path="/notes" />
                            <Route component={Email} path="/email" />
                            <Route component={Home} path="/" />
                        </Switch>
                    </main>

                </div>
            </Router>
        )
    }
}

