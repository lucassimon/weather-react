import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom'

import Home from './containers/Home'
import { Weather } from './containers/Weather'
import NotFound from './containers/NotFound'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/clima-e-tempo' component={Weather} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;

