import React from "react";
import { NavLink } from "react-router-dom";

export const DefaultCard = ({ content }) => {
  const url =
    "https://res.cloudinary.com/thetripguru/image/upload/f_auto,c_limit,w_720,q_auto/" +
    content.thumbnail;
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12 mb-4">
        <NavLink
          className="text-decoration-none"
          to={`/categories/${content.slug}`}
        >
          <div className="card border-0" style={{ height: "24rem" }}>
            <div
              className="card-body d-flex justify-content-center align-items-end rounded"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${url})`,
                backgroundSize: "cover",
              }}
            >
              <div>
                <h1 className="text-white pb-2">{content.name}</h1>
                <h5 className="text-white px-3 border rounded-pill">
                  Discover {content.tour_count} tours
                </h5>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};
