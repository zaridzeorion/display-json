import { React, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home.js";
import Footer from "./components/Footer";
import "./styles/main.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const handleThemeChange = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <div className="App">
        <div
          onClick={() => handleThemeChange()}
          title="Change theme"
          className="theme-button"
        >
          C
        </div>

        <Header />

        <Switch>
          <Route exact path="/">
            <Home darkMode={isDarkMode} />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
