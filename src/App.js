import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Header } from "./pages/header.js";
// import { DetailPage } from "./pages/detail.js";
// import { Footer } from "./pages/footer.js";

// function Header() {
//   return (
//     <div>
//       <h2>Header</h2>
//     </div>
//   );
// }

function App() {
  return (
    <Router path="/">
      <Route path="/" component={Header} />
      {/* <Route component={DetailPage} />
      <Route component={Footer} /> */}
    </Router>
  );
}

export default App;
