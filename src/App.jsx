import React, { lazy, Suspense } from 'react';
import { Router } from '@reach/router';
import Context from './Context';
import Loading from './components/Loading';
import GlobalStyle from './styles/GlobalStyles';

const Home = lazy(() => import('./views/Home'));
const About = lazy(() => import('./views/About'));
const Plans = lazy(() => import('./views/Plans'));
const Basic = lazy(() => import('./views/Plans/Basic'));
const Adventure = lazy(() => import('./views/Plans/Adventure'));
const Extreme = lazy(() => import('./views/Plans/Extreme'));
const Partners = lazy(() => import('./views/Partners'));
const Contact = lazy(() => import('./views/Contact'));
const NotFound = lazy(() => import('./views/NotFound'));

const App = () => (
  <Context.Provider>
    <Suspense fallback={<Loading />}>
      <GlobalStyle />
      <Router>
        <Home path='/' />
        <About path='/enbici' />
        <Plans path='/plans' />
        <Basic path='/basic' />
        <Adventure path='/adventure' />
        <Extreme path='/extreme' />
        <Contact path='/contact' />
        <NotFound default />
      </Router>
    </Suspense>
  </Context.Provider>
);

export default App;
