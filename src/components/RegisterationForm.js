import React, { useState, useEffect } from 'react'
import captcha from '../assets/captcha.svg'
import google from '../assets/google.svg'
import facebook from '../assets/facebook.svg'
import apple from '../assets/apple.svg'

//regular expressions for form validation
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const Registeration = () => {

    const [userName, setUserName] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)
    //email
    const [userEmail, setUserEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)
    //password
    const [userPassword, setUserPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)
    //confirm password
    const [matchPassword, setMatchPassword] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)
    // error message
    const [errorMessage, setErrorMessage] = useState('')


    // userName validation
    useEffect(() => {
        setValidName(USER_REGEX.test(userName))
    }, [userName])
    // email validation
    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(userEmail))
    }, [userEmail])
    // password and match password validation
    useEffect(() => {
        setValidPassword(PWD_REGEX.test(userPassword))
        setValidMatch(userPassword === matchPassword)
    }, [userPassword, matchPassword])
    //setting error message
    useEffect(() => {
        setErrorMessage('')
    }, [userPassword, userName, userEmail, matchPassword])




    return (
        <main className='form-section-bg'>
            <span>{errorMessage}</span>
            <div className="signup">
                <section className="headers">
                    <h2 className='form-section-heading'>Create Your Account</h2>
                    <p className='form-section-description'>Lorem ipsum, dolor sit </p>
                </section>
                <section className="form-inputs">
                    <form>
                        <label htmlFor="name">First Name</label>
                        <div className="inputWrapper">
                            <input
                                type="text"
                                id='name'
                                placeholder='e.g. John'
                                autoComplete='off'
                                onChange={(e) => setUserName(e.target.value)}
                                value={userName}
                                required
                                aria-invalid={validName ? 'false' : 'true'}
                                aria-describedby='usrNameNote'
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                            />
                            <p id='usernameNote' className={userFocus && userName && !validName ? 'instructions' : 'offscreen'}>
                            <b>Default Name Requirements</b> <br />
                                <ul>
                                    <li>Must be atleast 4 - 24 characters long. </li>
                                    <li>Must begin with a letter</li>
                                    <li>Letters, Numbers, Underscores, Hyphens allowed</li>
                                    
                                </ul>
                            </p>
                        </div>
                        <label htmlFor="email">Email</label>
                        <div className="inputWrapper">
                            <input
                                type="email"
                                id='email'
                                placeholder='johndoe@gmail.com'
                                autoComplete='off'
                                onChange={(e) => setUserEmail(e.target.value)}
                                value={userEmail}
                                aria-invalid={validEmail ? "false" : 'true'}
                                aria-describedby='emailNote'
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                            />
                            <p id='emailNote' className={emailFocus && userEmail && !validEmail ? 'instructions' : 'offscreen'}>Valid Syntax: example@domain.com</p>
                        </div>
                        <label htmlFor="password">Password</label>
                        <div className="inputWrapper">
                            <input
                                type="password"
                                id='password'
                                className={validMatch ? '' : 'invalid'}
                                autoComplete='false'
                                aria-invalid={validPassword ? 'false' : 'true'}
                                aria-describedby='passwordNote'
                                onChange={(e) => setUserPassword(e.target.value)}
                                value={userPassword}
                                onFocus={() => setPasswordFocus(true)}
                                onBlur={() => setPasswordFocus(false)}
                            />
                            <p id='passwordNote' className={passwordFocus && !validPassword && userPassword ? 'instructions' : 'offscreen'}>
                                <b>Default Password Requirements</b> <br />
                                <ul>
                                    <li>Must be atleast 8 characters long. </li>
                                    <li>Must include atleast 1 English uppercase letter (A-Z)</li>
                                    <li>Must include atleast 1 English lowercase letter (a-z)</li>
                                    <li>Must include atleast 1 numeric character (0-9)</li>
                                    
                                </ul>
                            </p>
                        </div>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <div className="inputWrapper">
                            <input
                                type="password"
                                id='confirm-password'
                                className={validMatch ? '' : 'invalid'}
                                onChange={(e) => setMatchPassword(e.target.value)}
                                value={matchPassword}
                                aria-invalid={validMatch ? 'false' : 'true'}
                                aria-describedby='validPasswordNote'
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)}
                            />
                            <p id="validPasswordNote" className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}>
                                Must match the first password input field.
                            </p>
                        </div>
                    </form>
                </section>
                <section className='buttons-section'>
                    <div className='agreement-section'>
                        <input type="checkbox" name="agreement" id="agreement" />
                        <label htmlFor="agreement">I agree to the <a href="/" className='link-underline'>Term and conditions</a> and <a href="/" className='link-underline'>Privacy Policy</a></label>
                    </div>
                    <div className="captcha">
                        <div className="captcha-div">
                            <input type="checkbox" name="robot-check" id="captcha-check" />
                            <label htmlFor="captcha-check">I'm not a robot</label>
                        </div>
                        <img src={captcha} alt="" />
                    </div>
                    <div className="btn">
                        <button type='submit' className="signup-btn btn">Sign Up</button>
                    </div>
                </section>
                <section className="social-signup">
                    <button type="submit" className='facebook btn'><img src={facebook} alt="" /></button>
                    <button type="submit" className='google btn'><img src={google} alt="" /></button>
                    <button type="submit" className='apple btn'><img src={apple} alt="" /></button>
                </section>
                <section className="accountExist">
                    <p>Already have an account? <a href="/" className='link-underline'>Login</a></p>
                </section>
            </div>
        </main>
    )
}

export default Registeration