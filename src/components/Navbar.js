import React from 'react'
import logo from '../assets/logo.svg'
import user from '../assets/user.svg'
import bars from '../assets/bars.svg'
import language from '../assets/language.svg'

const toggleNav = () => {
    const element = document.getElementById('toggle')
    element.classList.contains('toggle-list') ? element.classList.remove('toggle-list') : element.classList.add('toggle-list')
}

const Navbar = () => {
    return (
        <nav>
            <section className="logo-section">
                <img src={logo} alt="" className="logo" />
                <h2 className='logo-name'>Logo</h2>
            </section>
            <section className="nav-links" id='nav-links'>
                <ul className="links-list" id='toggle'>
                    <li className='nav-link'><a href="/">Home</a></li>
                    <li className='nav-link'><a href="/">About</a></li>
                    <li className='nav-link'><a href="/">Contact</a></li>
                    <li className='nav-link'><a href="/">New to Flatsharing?</a></li>
                </ul>
            </section>
            <section className="action-btn">
                <div className="language">
                    <img src={language} alt="" className='language'/>
                    <select name="language" id="language">
                        <option value="english">EL</option>
                    </select>
                </div>
                <div className="responsive-btn">
                    <img src={bars} alt="" onClick={toggleNav} />
                </div>
                <div className="buttons toggle-buttons">
                    <button className='secondary-btn btn' style={{fontWeight: 'bolder', letterSpacing: '0.05rem'}}>Sign Up</button>
                    <button className='primary-btn btn'> <img src={user} alt="" className='user' />Log In</button>
                </div>
            </section>
        </nav>
    )
}

export default Navbar