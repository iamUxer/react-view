import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "../layout/header"
import About from "./About"
import Content from "./Content"
import Footer from "../layout/footer"
import Menu from "../layout/menu"

export default function Layout() {
  return (
    <div className={"wrapper"} style={{ display: "flex", height: "100vh" }}>
      <BrowserRouter>
        <Header />
        <Menu />
        <div className={"contents"} style={styleContents}>
          <Switch>
            <Route path="/content" component={Content} />
            <Route path="/content:post" component={Content} />
            <Route path="/" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

const styleContents = {
  paddingTop: 50,
  width: "calc(100% - 180px)"
}
