import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import FuncHeader from "./components/FuncHeader";
import DetailComponent from "./components/DetailComponent"

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header title="Main title" subTitle="subtitle" />
          <Header title="Another Main title" />
          <FuncHeader title="Functional header" />
          <Route
          path="detail"
          exact
          render={(props)=> <DetailComponent {...props} title="hello" />}/>
        </header>
      </div>
    </Router>
  );
}

export default App;
