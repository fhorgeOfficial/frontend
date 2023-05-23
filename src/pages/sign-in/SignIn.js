import React from 'react'
import { Link } from 'react-router-dom';
import { useMode } from '../../providers/Mode';

const SignIn = () => {
    const mode = useMode();
    return (
        <>
            <Link to="/">
                <img src={((mode.myMode === 'dark') ? "/logo_dark.png" : "/logo.png")} width="112" height="28" alt={'Fhorge'} />
            </Link>
        </>
    )
}

export default SignIn