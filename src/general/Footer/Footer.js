import React from 'react'
import { useMode } from '../../providers/Mode'

const Footer = () => {
    const mode = useMode();
    return (
        <>
            <footer className={`${((mode.myMode === 'dark') ? "darkNav" : "lightNav")} footer`} style={{ boxShadow: 'none'}}>
                <div className={`${((mode.myMode === 'dark') ? "textLight" : "textDark")} content has-text-centered`}>
                    <p>
                        Copyright &copy; 2023 | FHORGE
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer