import React from "react";
import { Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { IoMdClock } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const TourCard = ({ tour, index }) => {
  const url =
    "https://res.cloudinary.com/thetripguru/image/upload/f_auto,c_limit,w_720,q_auto/" +
    tour.thumbnail;

  return (
    <>
      <div key={index} className="col-lg-3 text-start col-md-6 col-12 mb-4">
        <Card className="rounded-4  my-card" style={{ height: "450px" }}>
          <Card.Img
            variant="top"
            className=" p-2 rounded-4 tour-img"
            src={url}
          />
          <Card.Body>
            <div className="d-flex justify-content-between">
              <div>
                <p className="text-secondary fs-6">
                  <IoMdClock /> {tour.duration}hs
                </p>
              </div>
              <div>
                <p className="text-success">
                  <FaStar /> {tour.rating.toFixed(1)}
                </p>
              </div>
            </div>
            <Card.Title>
              {tour.title.length > 40
                ? tour.title.slice(0, 40) + "..."
                : tour.title}
            </Card.Title>
            <Card.Text>
              <h6 className="text-secondary mt-3">
                {tour.location.destination_name}, {tour.location.name}{" "}
              </h6>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="d-flex justify-content-between text-secondary align-items-center">
              <div className="d-flex flex-column align-items-start">
                <h6>from</h6>
                <h6>
                  <span className="fw-bolder fs-4 text-dark">
                    ${tour.price_details.price}
                  </span>
                  /person
                </h6>
              </div>
              <div className="fs-3">
                <MdOutlineKeyboardArrowRight />
              </div>
            </div>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
};
