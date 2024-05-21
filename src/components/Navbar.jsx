import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [expand, setExpand] = useState(false);

    const showToggle = () =>{
        setExpand(!expand)
    }
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-dark ">
                <div className="container">
                    <img src="/src/assets/logo.jpg" className='rounded border border-2' style={{'width':'5vw'}} alt="" />
                    <button className="navbar-toggler border" type="button" onClick={showToggle}>
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className={`collapse navbar-collapse ${!!expand && 'show'}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item m-auto ms-5">
                                <NavLink className="nav-link text-white fs-5"  to='/' href="#">Home</NavLink>
                            </li>
                            <li className="nav-item m-auto ms-5">
                                <NavLink className="nav-link text-white fs-5" to='/about' href="#">About</NavLink>
                            </li>
                            <li className="nav-item m-auto ms-5">
                                <NavLink className="nav-link text-white fs-5" to='/services' href="#">Services</NavLink>
                            </li>
                            <li className="nav-item m-auto ms-5">
                                <NavLink className="nav-link text-white fs-5" to='/events' href="#">Events</NavLink>
                            </li>
                            
                        </ul>
                    <button className='btn btn-primary fw-bold mt-0 '>JoinNow!</button>

                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
