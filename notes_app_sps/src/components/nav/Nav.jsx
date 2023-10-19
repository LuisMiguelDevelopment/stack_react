import { Link } from 'react-router-dom'
import './nav.css'
export const Nav = () => {
    return (
        <div className="nav">
            <div className="nav__title">NotesApp</div>
            <ul className="nav__ul">
                <li className="nav__li"><Link to="/" className="nav__a">Notes</Link></li>
                <li className="nav__li"><Link to="/createNote"  className="nav__a">Create Note</Link></li>
                <li className="nav__li"><Link to="/createUser" className="nav__a">Create User</Link></li>
            </ul>
        </div>
    )
}
