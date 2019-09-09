import React from 'react'
import Home from './Home'
import About from './About'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const App = () => {
  return(
   <Router>
        <div>
     
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/welcome' component={About} />
          </Switch>
        </div>
      </Router>
   )
}
export default App;