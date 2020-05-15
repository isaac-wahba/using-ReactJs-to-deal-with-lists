import React from "react";

const validationComponent = (props) => {
  let lengthValidator = <div></div>;

  if (props.howLong < 5) {
    lengthValidator = <p>Length is too short</p>;
  } else return <p>Length is long enough</p>;
  return <div>{lengthValidator}</div>;
};

export default validationComponent;
