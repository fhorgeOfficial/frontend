import React from 'react';
import AI from '../../../images/ai.jpg';
import DataScience from '../../../images/data_science.jpg'
import DataAnalysis from '../../../images/data_analysis.jpg'
import Cybersecurity from '../../../images/cyersecurity.jpg'
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <>
            <h1 className={`p-5`}>
                Categories
            </h1>
            <div class="columns p-5">
                <div class="column">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by4">
                                <img src={AI} alt="Artificial Intelligence" />
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img src={AI} alt="Artificial Intelligence" />
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <Link to='/courses/ai'>
                                        Artificial Intelligence
                                    </Link>
                                    <p class="subtitle is-6">
                                        <small>100 subscribers</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by4">
                                <img src={DataScience} alt="Data Science" />
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img src={DataScience} alt="Data Science" />
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <Link to='/courses/data_science'>
                                        Data Science
                                    </Link>
                                    <p class="subtitle is-6">
                                        <small>
                                            <b>
                                                20 subscribers
                                            </b>
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by4">
                                <img src={Cybersecurity} alt="Cybersecurity" />
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img src={Cybersecurity} alt="Cybersecurity" />
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <Link to='/courses/Cybersecurity'>
                                        Cybersecurity
                                    </Link>
                                    <p class="subtitle is-6">
                                        <small>1200 subscribers</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by4">
                                <img src={DataAnalysis} alt="Data Analysis" />
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img src={DataAnalysis} alt="Data Analysis" />
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <Link to='/courses/data_science'>
                                        Data Analysis
                                    </Link>
                                    <p class="subtitle is-6">
                                        <small>
                                            <b>
                                                2200 subscribers
                                            </b>
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories