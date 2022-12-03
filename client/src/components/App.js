import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hotels from './Hotels/Hotels';
import Hotel from './Hotel/Hotel';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="api/v1/hotels" component={Hotels}/>
        <Route exact path="api/v1/hotels/:slug" component={Hotel}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App