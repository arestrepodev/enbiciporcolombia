import React, { lazy, Suspense } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Router } from '@reach/router';
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
  <Suspense fallback={<Loading />}>
    <GlobalStyle />
    <Router>
      <Home path='/' />
      <About path='/enbici' />
      <Plans path='/plans' />
      <Basic path='/plans/basic' />
      <Adventure path='/plans/adventure' />
      <Extreme path='/plans/extreme' />
      <Contact path='/contact' />
      <NotFound default />
    </Router>
  </Suspense>
);

export default App;
