import React from "react";
import { render } from "react-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes/routes";
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import { ProvideAuth } from "./components/Shared/ProvideAuth";

render(
  <ProvideAuth>
    <Router>
      <Header />
      {routes}
      <Footer />
    </Router>
  </ProvideAuth>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
