import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Index } from "./pages";
import { About } from "./pages/about";
import { UserContext } from "./UserContext";

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>

        {/* wrap child components that will use the UserContext in a Provider */}
        {/* <UserContext.Provider value={{ value, setValue }}> */}
        <UserContext.Provider value={value}>
          <Route path="/" exact component={Index}></Route>
          <Route path="/about/" component={About}></Route>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
