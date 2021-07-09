import React from 'react'
import {BrowserRouter as Router , Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/navbarcomponent.js"
import ExercisesList from "./components/exercises-listcomponent";
import EditExercise from "./components/edit-exercisecomponent";
import CreateExercise from "./components/create-exercisecomponent";
import CreateUser from "./components/create-usercomponent";

function App() {
  return (
    <Router>
    <div className="container">
    <Navbar />
    <br/>
    <Route path="/" exact component={ExercisesList} />
    <Route path="/edit/:id" component={EditExercise} />
    <Route path="/create" component={CreateExercise} />
    <Route path="/user" component={CreateUser} />
    </div>
  </Router>
  );
}

export default App;
