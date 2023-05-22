import React from 'react'
import Navigation from '../../general/Nav/Navigation'
import Footer from '../../general/Footer/Footer'
import TopHero from './components/TopHero'
import Categories from './components/Categories'
import { useMode } from '../../providers/Mode'

const Home = () => {
    const mode = useMode();
    return (
        <>
            <Navigation />

            {/* Homepage body starts */}
            <div className={`${mode.myMode === 'light' ? 'lightNav' : 'darkNav'}`}>
                <TopHero />

                <Categories />
            </div>
            {/* Homepage body ends */}

            <Footer />
        </>
    )
}

export default Home