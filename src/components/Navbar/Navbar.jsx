import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import './Navbar.css'

const Navbar = () => {

    const { user } = useUser()

    return (
        <nav id="navbar">
            <h1 id="title">Lost in Translation</h1>

            { user !== null &&
            <ul id="navList">
                <li>
                <NavLink className="link" to="/translation">Translation</NavLink>
                </li>
                <li>
                <NavLink className="link" to="/profile">Profile</NavLink>
                </li>
            </ul>
            }
        </nav>
    )
}

export default Navbar