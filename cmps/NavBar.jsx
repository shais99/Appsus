const { NavLink } = ReactRouterDOM


export default class NavBar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ul className="main-nav clean-list flex">
                    <li className="quit-menu"><button onClick={() => this.props.toggleMenu()}></button></li>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/books">Books</NavLink></li>
                    <li><NavLink to="/notes">Notes</NavLink></li>
                    <li><NavLink to="/email/inbox">Email</NavLink></li>
                </ul>
                <button onClick={() => this.props.toggleMenu()} className="btn-menu"></button>
            </React.Fragment>
        )
    }
}