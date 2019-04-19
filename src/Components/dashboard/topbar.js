import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import "./topbar.scss"
// import "../Universal/Navbar.scss"

// Auth Context 
import AuthContext from '../../Context/Auth-Context'

export default class Topbar extends Component {

    static contextType = AuthContext

    render() {
        return (
            <div className="">
                <div className=" topbar  ">
                    <a className="topbar_main" href="#">
                        talkItOut
                     </a>
                    <div className="topbar-panel">
                        <a className="topbar-link" href="#">
                            Home
                        </a>
                        <a className="topbar-link" href="#">
                            Events
                        </a>
                        {/* Render only if a token is unavailable ( IE - is not logged in ) */}
                        { !this.context.token && <Link className="topbar-link" to='/login'>
                            Login
                        </Link> }
                        {/* Render only if a token is unavailable ( IE - is not logged in ) */}
                        { !this.context.token && <Link className="topbar-link" to='/register'>
                            Register
                        </Link> }
                        {/* Render only if a token is available ( IE - is logged in ) */}
                        { this.context.token && <Link className="topbar-link" to='/log'>
                            Activity Log
                        </Link> }
                        {/* Render only if a token is available ( IE - is logged in ) */}
                        { this.context.token && <Link className="topbar-link" to='/logout'>
                            Logout
                        </Link> }
                    </div>
                </div>
            </div>
        )
    }
}  