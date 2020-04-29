const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const history = History.createBrowserHistory()

import Home from './pages/Home.jsx'
import Notes from './pages/Notes.jsx'
import Email from './pages/Email.jsx'
import UserMsg from './cmps/UserMsg.jsx'

import BookApp from './pages/books/pages/BookApp.jsx'
import BookDetails from './pages/books/pages/BookDetails.jsx'

import NavBar from './cmps/NavBar.jsx'

export class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                
                    <header className="main-header">
                        <div className="container flex align-center space-between">
                            <div className="logo-container flex align-center">
                                <img className="logo-icon" src="assets/img/logo.png" alt="" />
                                <a href="index.html">
                                    <h1 className="logo">Appsus</h1>
                                </a>
                            </div>

                            <NavBar toggleMenu={this.toggleMenu} history={history} />
                        </div>
                    </header>
                    <main className="main-container fade-in">
                        <Switch>
                            <Route component={BookDetails} path="/books/:theBookId" />
                            <Route component={BookApp} path="/books" />
                            <Route component={Notes} path="/notes" />
                            <Route component={Email} path="/email/:filter" />
                            <Route component={Home} path="/" />
                        </Switch>
                    </main>
                </div>
                <UserMsg />
            </Router >
        )
    }
}

