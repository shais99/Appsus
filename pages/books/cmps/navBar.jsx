const { NavLink } = ReactRouterDOM


export function NavBar() {
    return <ul className="main-nav clean-list flex justify-center align-center">
            <li><NavLink exact to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/books'>Our Books</NavLink></li>
        </ul>
}