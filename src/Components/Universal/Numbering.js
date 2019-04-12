import React from "react";

import "./Numbering.scss";
const Numbering = props => {
  return (
    <div className="numbering__container ">
      <div className="display4 font-weight-bold numbering__number">
        {props.number}
      </div>
      <div className="float-left numbering__title ">{props.title}</div>
      <div className="font-weight-light numbering__text">{props.text}</div>
    </div>
  );
};

export default Numbering;
