import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    
   return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark text-white">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          </ul>
                        <div className="form-check form-switch text-white">
                            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch theme</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Navbar