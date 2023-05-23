import React, { useState } from 'react'
import { useMode } from '../../../providers/Mode';
import HeroImage from '../../../images/home_hero.png';
import style from './hero.module.css'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const TopHero = () => {
    const mode = useMode();
    const navigate = useNavigate();
    const [courseSearch, setCourseSearch] = useState('');
    const searchCourse = () => {
        if (courseSearch === "") {
            toast.error('Please enter a course', {
                theme: mode.myMode
            })
        } else {
            navigate("/courses?q=" + courseSearch);
        }
    }
    return (
        <>
            <ToastContainer />
            <section className={`${mode.myMode === 'dark' ? 'lightNav' : 'darkNav'} hero is-medium`} style={{ borderRadius: '0 0 53% 47%/0 0 14% 7%' }}>
                <div className="hero-body">
                    <div className='row justify-content-center'>
                        <div className='col-lg-5 col-md-6 col-sm-12 col-12'>
                            <div className='d-flex align-items-center' style={{ height: '100%' }}>
                                <div className='row p-5'>
                                    <h1 className={`${mode.myMode === 'light' ? 'textLight' : 'textDark'} ${style.title} col-lg-12 w-100 title`}>
                                        Fhorge your career
                                    </h1>
                                    <form>
                                        <div className="field has-addons w-100">
                                            <div className="control">
                                                <input className="input" type="text" defaultValue={courseSearch} onChange={e => setCourseSearch(e.target.value)} placeholder="Find a course" />
                                            </div>
                                            <div className="control">
                                                <a className={`darkNav button`} onClick={searchCourse}>
                                                    <span className="material-symbols-outlined">
                                                        search
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                            <img src={HeroImage} alt=" " className='w-100' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopHero