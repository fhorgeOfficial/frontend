import React from 'react';
import { Pop, } from 'react-preloading-component';
import { useMode } from './providers/Mode';
import './Preloader.css'

const Preloader = () => {
    const mode = useMode();
    return (
        <>
            <div className={`${(mode.myMode === 'light') ? 'lightMode' : 'darkMode'} preloader d-flex`}>
                <Pop
                    color={(mode.myMode === 'light') ? '#002347' : '#4460EF'}
                    secondaryColor={(mode.myMode === 'dark') ? '#002347' : '#4460EF'}
                    size={30}
                    text={'Fhorge'}
                />
            </div>
        </>
    )
}

export default Preloader