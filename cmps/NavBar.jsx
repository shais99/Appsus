const { NavLink } = ReactRouterDOM


export default class NavBar extends React.Component {
    toggleMenu() {
        document.body.classList.toggle('menu-open')
    }
    render() {
        return (
            <React.Fragment>
                <section className="screen" onClick={() => this.toggleMenu()}></section>
                <ul className="main-nav clean-list flex">
                    <li className="quit-menu"><button onClick={() => this.toggleMenu()}></button></li>
                    <li><NavLink exact to="/" onClick={() => this.toggleMenu()}>Home</NavLink></li>
                    <li><NavLink to="/books" onClick={() => this.toggleMenu()}>Books</NavLink></li>
                    <li><NavLink to="/notes" onClick={() => this.toggleMenu()}>Notes</NavLink></li>
                    <li><NavLink to="/email/inbox" onClick={() => this.toggleMenu()}>Email</NavLink></li>
                </ul>
                <button onClick={() => this.toggleMenu()} className="btn-menu"></button>
            </React.Fragment>
        )
    }
}