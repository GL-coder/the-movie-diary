import React from "react";

import "./style.scss";

const Spinner: React.FC = () => {
  return <div className="spinner"></div>;
};

export default React.memo(Spinner);