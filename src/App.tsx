import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
export default class App extends React.Component {
  render() {
    return <div className="wrapper">
        <Router>
          <Switch>
            {/* <Route exact path="/"><Mobile/></Route> */}
            {/* <Route path="/StepPage"><Home/></Route> */}
          </Switch>
        </Router>
      </div>
  }
}
