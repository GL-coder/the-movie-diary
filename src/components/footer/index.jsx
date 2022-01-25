import React from "react";

import "./style.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <a href="http://www.omdbapi.com/" target="_blank" rel="noreferrer">
          API: http://www.omdbapi.com/
        </a>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
