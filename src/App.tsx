import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toast";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
import { ProvideAuth } from "./components/Auth/ProvideAuth";
import routes from "./routes/routes";

const App = () => (
  <ProvideAuth>
    <Router>
      <Header />
      {routes}
      <Footer />
    </Router>
    <ToastContainer position="bottom-center" />
  </ProvideAuth>
);

export default App;
