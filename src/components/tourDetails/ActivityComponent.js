import React from "react";

export const ActivityComponent = ({ title, value, children }) => {
  return (
    <div className="d-flex align-items-center mb-2">
      <div className="me-3 fs-3  text-secondary">
        {children}
      </div>
      <div className="text-secondary">
        <span>{title}</span>
        <p className="pb-0 mb-0 fs-5">{value}</p>
      </div>
    </div>
  );
};
