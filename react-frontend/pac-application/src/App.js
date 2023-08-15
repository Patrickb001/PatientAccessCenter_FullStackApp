import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Loading, PatientComponent, NavBar, Login } from "./components";

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <NavBar />
      {isAuthenticated ? (
        <Route path="/" exact component={PatientComponent}></Route>
      ) : (
        <Route path="/" component={Login}></Route>
      )}
    </div>
  );
}

export default App;
