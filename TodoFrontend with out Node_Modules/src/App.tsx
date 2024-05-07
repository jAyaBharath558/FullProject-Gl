import { Route, Switch, useHistory } from "react-router-dom";
import Header from "./Component/Header";
import ListToDo from "./Component/ListToDo";
import ToDo from "./Component/ToDo";
import Footer from "./Component/Footer";
import { useState } from "react";
import { Button } from "react-bootstrap";
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/add-todo">
          <ToDo />
        </Route>
        <Route exact path="/list-todo">
          <ListToDo />
        </Route>
        <Route exact path="/edit-todo/:id">
          <ToDo />
        </Route>
        <Route exact path="/updated-todo">
          <ListToDo />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
