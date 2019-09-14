import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Loading } from "./components/Loading";

const Home = lazy(() => import("./views/Home"));
const About = lazy(() => import("./views/About"));
const Plans = lazy(() => import("./views/Plans"));
const Partners = lazy(() => import("./views/Partners"));
const Contact = lazy(() => import("./views/Contact"));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/enbici" exact component={About} />
        <Route path="/plans" exact component={Plans} />
        <Route path="/partners" exact component={Partners} />
        <Route path="/Contact" exact component={Contact} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
