import React, { lazy, Suspense } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Router} from "@reach/router";
import Loading from './components/Loading';
import GlobalStyle from './styles/GlobalStyles';
import Detail from "./views/Detail";

const Home = lazy(() => import('./views/Home'));
const About = lazy(() => import('./views/About'));
const Plans = lazy(() => import('./views/Plans'));
const Partners = lazy(() => import('./views/Partners'));
const Contact = lazy(() => import('./views/Contact'));
const NotFound = lazy(() => import('./views/NotFound'));


const App = () => (
  <Suspense fallback={<Loading />}>
    <GlobalStyle />
    <Router>
      <Home path="/"/>
      <About path="/enbici"/>
      <Plans path="/plans"/>
      <Contact path="/contact"/>
      <Detail path="/detail/:detailId" />
      <NotFound default/>
    </Router>
  </Suspense>
);

export default App;
