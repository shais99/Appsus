const { NavLink } = ReactRouterDOM

export function NavBar(props) {
    return (
        <ul className="main-nav clean-list flex">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/books">Books</NavLink></li>
            <li><NavLink to="/notes">Notes</NavLink></li>
            <li><NavLink to="/email/inbox">Email</NavLink></li>
        </ul>
    )
}