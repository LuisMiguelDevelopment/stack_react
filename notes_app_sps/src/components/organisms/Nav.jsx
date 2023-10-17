import './nav.css'
export const Nav = () => {
    return (
        <div className="nav">
            <div className="nav__title">NotesApp</div>
            <ul className="nav__ul">
                <li className="nav__li"><a href="" className="nav__a">Notes</a></li>
                <li className="nav__li"><a href="" className="nav__a">Create Note</a></li>
                <li className="nav__li"><a href="" className="nav__a">Create User</a></li>
            </ul>
        </div>
    )
}
