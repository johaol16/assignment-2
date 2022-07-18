import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import './Navbar.css'

const Navbar = () => {

    const { user } = useUser()

    return (
        <nav id="navbar">
            <h1 id="title">Lost in Translation</h1>

            { user !== null &&
            <ul>
                <li>
                <NavLink to="/translation">Translation</NavLink>
                </li>
                <li>
                <NavLink to="/profile">Profile</NavLink>
                </li>
            </ul>
            }
        </nav>
    )
}

export default Navbar