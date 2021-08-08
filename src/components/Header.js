import React from 'react'
import Typed from "react-typed"
import {Link} from "react-scroll"


function Header() {
    return (
        <div className="header-wraper" id="home">
            <div className="main-info">
                <h1 style={{ paddingBottom: 120 }}>WELCOME TO MY PORTFOLIO Website</h1>
               
                <Typed
                    className="typed-text"
                    strings={["I am Mohamed Ali", " A Software Tester"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link
                    activeclass='active'
                    to='contacts'
                    spy="true"
                    smooth="true"
                    offset={-55}
                    duration={800}
                    className="btn-style"> Contact me</Link>
            </div>
        </div>
    )
}

export default Header
