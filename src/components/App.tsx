import * as React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import EventPage from "./EventPage";

const routes = [
  <Route exact key="home" path="/" component={Home} />,
  <Route exact key="event-page" path="/event" component={EventPage} />,
];

const App = () => {
  return <Switch>{routes}</Switch>;
};

export default App;
