import React from 'react'
import {Link} from 'react-router-dom'
const Nav=()=> {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src="/images/logo.png" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center display-6" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">الصفحة الرئيسية</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/pizaa">بيتزا</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/mnakesh">مناقيش</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/lzania">لزانيا</Link>
                    </li>
                
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}
export default Nav;