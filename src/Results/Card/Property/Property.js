import React from "react";

function Property(props) {
  const hasValue = props.value;
  if (hasValue) {
    return (
      <div className="property">
        <p>
          <span>{props.label}</span> {props.value}
        </p>
      </div>
    );
  }
  return null;
}

export default Property;
