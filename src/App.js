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

function App() {

  const Home = React.lazy(() => import('./pages/home/Home'));

  return (
    <>
      <Mode>
        <Suspense fallback={<Preloader />}>
          <Home />
        </Suspense>
      </Mode>
    </>
  );
}

export default App;
