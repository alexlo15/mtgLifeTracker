import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from "./Pages/Main"
function App() {
  return (
    <>
      <div className="container">
            <Router>
              <React.Fragment>
                <Switch>
                  <Route exact path="/" component={Main} />
                </Switch>
              </React.Fragment>
            </Router>
      </div>
    </>

  );
}

export default App;
