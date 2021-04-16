import React from 'react';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Swtich, Route, Redirect } from 'react-router-dom';

import PageRenderer from './page-renderer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Swtich>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route component={() => 404} />
        </Swtich>
      </div>
    </Router>
  );
}

export default App;
