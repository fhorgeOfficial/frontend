import React from 'react'
import { useMode } from '../../../providers/Mode'

const TopHero = () => {
    const mode = useMode();
    return (
        <>
            <section className={`${mode.myMode === 'dark' ? 'lightNav' : 'darkNav'} hero is-medium`}>
                <div className="hero-body">
                    <div className='containrer'>
                        <h1 className={`${mode.myMode === 'light' ? 'textLight' : 'textDark'}`}>
                            TOP HERO
                        </h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopHero