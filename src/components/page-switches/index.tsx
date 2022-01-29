import React from "react";

import PageSwitchesItem from "../page-switches-item/";

import "./style.scss";

const PageSwitches: React.FC = () => {
  const itemsData = [
    { text: "main page", keyValue: "" },
    { text: "find a movie", keyValue: "searching" },
  ];

  const items = itemsData.map(({ text, keyValue }) => {
    return <PageSwitchesItem key={text} text={text} keyValue={keyValue} />;
  });

  return <div className="page-switches">{items}</div>;
};

export default PageSwitches;