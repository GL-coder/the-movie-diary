import React from "react";

import PageSwitches from "../page-switches/";

import "./style.scss";

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <div className="content">
          <h1>The Movie Diary</h1>

          <PageSwitches />
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
