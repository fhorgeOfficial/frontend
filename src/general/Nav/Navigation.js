import React, { useState } from 'react'
import { useMode } from '../../providers/Mode'
import { Link } from 'react-router-dom';
import Login from '../../images/login.png'

const Navigation = () => {
    const mode = useMode();
    const [showMenu, setShowMenu] = useState(false);

    const toogleMenu = () => {
        if (showMenu) {
            setShowMenu(false)
        } else {
            setShowMenu(true);
        }
    }
    return (
        <>
            <nav className={`${((mode.myMode === 'dark') ? "darkNav" : "lightNav")} navbar`} role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to={'/'}>
                        <img src={((mode.myMode === 'dark') ? "/darkLogo.png" : "/logo.png")} width="112" height="28" alt={'Fhorge'} />
                    </Link>

                    <Link role="button" className={`${showMenu ? 'is-active' : ''} navbar-burger`} style={{ position: 'fixed', right: '15px' }} aria-label="menu" aria-expanded="false" onClick={toogleMenu} data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Link>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item" to={'/'}>
                            Home
                        </Link>

                        <Link className="navbar-item">
                            Documentation
                        </Link>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <Link className="navbar-link">
                                More
                            </Link>

                            <div className="navbar-dropdown">
                                <Link className="navbar-item">
                                    About
                                </Link>
                                <Link className="navbar-item">
                                    Jobs
                                </Link>
                                <Link className="navbar-item">
                                    Contact
                                </Link>
                                <hr className="navbar-divider" />
                                <Link className="navbar-item">
                                    Report an issue
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link className={`${((mode.myMode === 'light') ? "lightMenuLink" : "darkMenuLink")} menuLink modeChanger`} onClick={() => mode.toogleMode()}>
                                    {(mode.myMode === 'light') ? (
                                        <>
                                            <span class="material-symbols-outlined" style={{ color:'#FD7702', }} >
                                                star
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <>
                                                <span class="material-symbols-outlined" style={{ color:'#002347', }}>
                                                    dark_mode
                                                </span>
                                            </>
                                        </>
                                    )}
                                </Link>
                                <Link to={'/sign-in'} className={`${((mode.myMode === 'light') ? "lightMenuLink" : "darkMenuLink")} menuLink`}>
                                    <img src={Login} alt={''} height={'20'}  />
                                    Sign in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation