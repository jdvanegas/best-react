import React from "react";
import { Link } from "react-router-dom";
import MainSearch from "../../components/MainSearch";
import { FashionIcon, TecnologyIcon } from "../../helpers/icons";

import "../../styles/pages/home.scss";

const HomePage = (): JSX.Element => {
  return (
    <div className="container">
      <MainSearch />
      <div className="ms-categories">
        <div className="row ">
          <div className="col-md-6">
            <Link to="/moda">
              <div className="card ms-yellow">
                <div className="card-body">
                  {FashionIcon}
                  <span>Moda</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-6">
            <Link to="/moda">
              <div className="card ms-blue">
                <div className="card-body">
                  {TecnologyIcon}
                  <span>Tecnología</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
