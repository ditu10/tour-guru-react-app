import React from 'react'

export const Heading = ({title, subtitle}) => {
  return (
    <div>
      <h1 className="">{title}</h1>
      <h3 className="text-secondary">
        {subtitle}
      </h3>
    </div>
  );
}
