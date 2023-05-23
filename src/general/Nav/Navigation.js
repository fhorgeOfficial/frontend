import React, { useEffect, useState } from 'react'
import { useMode } from '../../providers/Mode'
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const mode = useMode();
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();

    const toogleMenu = () => {
        if (showMenu) {
            setShowMenu(false)
        } else {
            setShowMenu(true);
        }
        console.log(location.pathname)
    }

    useEffect(() => {
        setShowMenu(false);
    }, [location.pathname])
    return (
        <>
            <nav className={`${((mode.myMode === 'dark') ? "darkNav" : "lightNav")} navbar p-0`} role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className={`${((mode.myMode === 'dark') ? "textLight" : "textDark")} navbar-item`} to={'/'}>
                        <img src={((mode.myMode === 'dark') ? "/logo_dark.png" : "/logo.png")} width="112" height="28" alt={'Fhorge'} />
                    </Link>

                    <Link role="button" className={`${showMenu ? 'is-active' : ''} ${((mode.myMode === 'dark') ? "textLight" : "textDark")} navbar-burger`} style={{ position: 'absolute', right: '15px' }} aria-label="menu" aria-expanded="false" onClick={toogleMenu} data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Link>
                </div>

                <div id="navbarBasicExample" className={`${showMenu ? 'sm' : ''} ${mode.myMode} navbar-menu align-items-center`}>
                    <div className={`navbar-start ${mode.myMode} ${showMenu ? 'no-border' : ''}`}>
                        <Link className={`${((mode.myMode === 'dark') ? "textLight" : "textDark")} ${location.pathname === '/' ? 'active' : ''} navbar-item`} to="/">
                            Home
                        </Link>
                        <Link className={`${((mode.myMode === 'dark') ? "textLight" : "textDark")} ${location.pathname === '/courses' ? 'active' : ''} navbar-item`} to="/courses">
                            Courses
                        </Link>
                        <Link className={`${((mode.myMode === 'dark') ? "textLight" : "textDark")} ${location.pathname === '/help-center' ? 'active' : ''} navbar-item`} to="/help-center">
                            Help Center
                        </Link>
                        <Link className={`${((mode.myMode === 'dark') ? "textLight" : "textDark")} ${location.pathname === '/about-us' ? 'active' : ''} navbar-item`} to="/about-us">
                            About us
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <div className={`${((mode.myMode === 'dark') ? "textLight" : "textDark")} navbar-item`}>
                            <div className="buttons d-flex" style={{ alignContent: 'center' }}>
                                <Link className={`${((mode.myMode === 'light') ? "textDark" : "textLight")} menuLink modeChanger`} title={mode.myMode + " mode"} onClick={() => mode.toogleMode()}>
                                    {(mode.myMode === 'light') ? (
                                        <>
                                            <span class="material-symbols-outlined" style={{ color: '#FD7702', }} >
                                                star
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <>
                                                <span class="material-symbols-outlined" style={{ color: '#f2f2f2', }}>
                                                    dark_mode
                                                </span>
                                            </>
                                        </>
                                    )}
                                    <span className={`${((mode.myMode === 'light') ? "textDark" : "textLight")}`}>
                                        {mode.myMode.toUpperCase()}
                                    </span>
                                </Link>
                                <Link to={'/sign-in'} className={`${((mode.myMode === 'light') ? "textDark" : "textLight")} ${location.pathname === '/sign-in' ? 'active' : ''} menuLink d-flex`}>
                                    <span className={`${((mode.myMode === 'light') ? "textDark" : "textLight")} material-symbols-outlined`}>
                                        login
                                    </span>
                                    <span className={`${((mode.myMode === 'light') ? "textDark" : "textLight")}`}>
                                        Sign in
                                    </span>
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