import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMdClock } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { TopNavbar } from "../shared/TopNavbar";
import { MyCenteredModal } from "../components/MyCenteredModal";

export const Destination = () => {
  const { slug } = useParams();
  const [tours, setTours] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.thetripguru.com/api/tours/?location__city__slug=${slug}&categories__url=&min_price=0&max_price=2475`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTours(data.data);
      });

    fetch(`https://api.thetripguru.com/api/categories/?destination_slug=${slug}&limit=100`)
        .then(res => res.json())
        .then(data => {
            console.log(data.data)
            setAvailableCategories(data.data)
        })
  }, []);
  return (
    <>
      <TopNavbar />
      <section className="text-center container">
        <MyCenteredModal categories={availableCategories} />
        <div className="mt-5">
          <h5 className="text-secondary mb-0 pb-0">Showing</h5>
          <h1>Experiences in {slug}</h1>
        </div>

        <div className="d-flex justify-content-between">
          <h5 className="text-secondary">{tours.length} tours available</h5>
          <div>
            <button>Sort by</button>
            <button>Filter</button>
          </div>
        </div>

        <div className="row mx-md-3 mt-5 mx-lg-5">
          {tours.map((tour, index) => {
            const url =
              "https://res.cloudinary.com/thetripguru/image/upload/f_auto,c_limit,w_720,q_auto/" +
              tour.thumbnail;
            console.log(url);
            //   if (index < 8)

            return (
              <div className="col-lg-3 text-start col-md-6 col-12 mb-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src={url}
                    style={{ height: "16rem" }}
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
                      <h5 className="text-secondary mt-3">
                        {tour.location.destination_name}, {tour.location.name}{" "}
                      </h5>
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
            );
          })}
        </div>
      </section>
    </>
  );
};
