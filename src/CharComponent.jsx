import React from "react";

const char = (props) => {
  const styledComponent = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    border: "1px solid black",
    //text-align: "center",
  };

  return (
    <div style={styledComponent} onClick={props.click} onChange={props.changed}>
      <p>{props.letter}</p>
    </div>
  );
};

export default char;
