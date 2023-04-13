import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Projects from './Projects';
import Tasks from './Tasks';

const App = () => {
  return (
    <div id="root">
    <Router>
      <Switch>
        <Route exact path="/" component={Projects} />
        <Route path="/projects/:projectId/tasks" component={Tasks} />
      </Switch>
    </Router>
    </div>
  );
};

export default App;
