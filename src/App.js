import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailPage from "./pages/detail";
import Footer from "./pages/footer";

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={DetailPage} />
      <Route exact path="/" component={Footer} />
    </BrowserRouter>
  );
}
