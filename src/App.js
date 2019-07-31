import React from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import Layout from "./pages/Layout"

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Layout} />
      </Switch>
      <Redirect from="/" to="/" />
    </BrowserRouter>
  )
}
