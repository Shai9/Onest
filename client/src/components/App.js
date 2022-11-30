import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hotels from './Hotels/Hotels';
import Hotel from './Hotel/Hotel';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Hotels}/>
        <Route exact path="/https://onest-azpw.onrender.com/:slug" component={Hotel}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App