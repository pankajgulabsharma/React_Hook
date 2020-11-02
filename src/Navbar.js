import React from 'react'
import './NavbarCSS.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="menu-style">
            {/* <a href="/">NavComp1</a> */}
            <NavLink exact activeClassName="active_class" to='/'>NavComp1</NavLink><br />
            <NavLink exact activeClassName="active_class" to='/navcomp2'>NavComp2</NavLink><br />
            <NavLink exact activeClassName="active_class" to='/navcomp3'>NavComp3</NavLink><br />
            <NavLink exact activeClassName="active_class" to='/navcomp3/navcomp4'>NavComp4</NavLink><br />
            <NavLink exact activeClassName="active_class" to='/useparams'>User</NavLink><br />
            <NavLink exact activeClassName="active_class" to='/search'>Search</NavLink><br />
        </div>
    )
}

export default Navbar
