import React, { Suspense } from 'react';
import './App.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bulma/css/bulma.css';
import 'fontawesome'
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Wave, Flag } from 'react-preloading-component';
import { Mode } from './providers/Mode';
import Preloader from './Preloader';
import { Route, Routes } from 'react-router-dom';

function App() {

  const Home = React.lazy(() => import('./pages/home/Home'));
  
  const Contact = React.lazy(() => import('./pages/contact/Contact'));
  const About = React.lazy(() => import('./pages/about/About'));
  const HelpCenter = React.lazy(() => import('./pages/helpCenter/HelpCenter'));
  const SignIn = React.lazy(() => import('./pages/sign-in/SignIn'));

  return (
    <>
      <Mode>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <Suspense fallback={<Preloader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            exact
            path='/about-us'
            element={
              <Suspense fallback={<Preloader />}>
                <About />
              </Suspense>
            }
          />
          <Route
            exact
            path='/sign-in'
            element={
              <Suspense fallback={<Preloader />}>
                <SignIn />
              </Suspense>
            }
          />
          <Route
            exact
            path='/courses'
            element={
              <Suspense fallback={<Preloader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            exact
            path='/help-center'
            element={
              <Suspense fallback={<Preloader />}>
                <HelpCenter />
              </Suspense>
            }
          />
        </Routes>
      </Mode>
    </>
  );
}

export default App;
