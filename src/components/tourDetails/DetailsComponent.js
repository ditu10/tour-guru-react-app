import React from "react";

export const DetailsComponent = ({title, children, color}) => {
  return (
    <div className="py-2">
      <h4 className={color}>{title}</h4>
      {children}
    </div>
  );
};
