import React, { useEffect, useState } from "react";
import { TopNavbar } from "../shared/TopNavbar";
import { NavLink, useParams } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";

export const TourDetails = () => {
  const { slug } = useParams();

  const [relatedTour, setRelatedTour] = useState([]);
  const [tour, setTour] = useState({});
  const [media, setMedia] = useState([]);

  useEffect(() => {
    fetch(`https://api.thetripguru.com/api/tours/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTour(data.data);
      });

    fetch(`https://api.thetripguru.com/api/tours/${slug}/media`)
      .then((res) => res.json())
      .then((data) => {
        setMedia(data.data);
      });

    fetch(`https://api.thetripguru.com/api/tours/${slug}/related`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedTour(data.data);
      });
  }, []);

  return (
    <>
      <TopNavbar />
      <section className="container">
        <NavLink
          className="text-decoration-none text-secondary fs-5"
          to={"/Home"}
        >
          Home
        </NavLink>
        <MdKeyboardArrowRight className="mx-1 fs-4" />
        <NavLink
          className="text-decoration-none text-secondary fs-5"
          to={"/tours"}
        >
          Tours
        </NavLink>
        <MdKeyboardArrowRight className="mx-1 fs-4" />
        <NavLink
          className="text-decoration-none text-secondary fs-5"
          to={`/tour/${slug}`}
        >
          {slug}
        </NavLink>
      </section>

      <section className="container">
        <section className="mt-5">
          <h4>{tour?.title}</h4>
          <div className="py-2">
            <span className="primary-color fs-5 border px-2 py-1 me-2">
              <FaStar className="me-1" /> {tour.rating?.toFixed(1)}
            </span>
            <span className="fs-5 text-secondary px-2 py-1">
              <MdPeopleAlt className="me-1" />
              {tour.bookings} times booked
            </span>
          </div>
        </section>

        {/* <section>
        {
            media.map(temp => {
                const imgUrl = `https://res.cloudinary.com/thetripguru/image/upload/f_auto,w_720,e_blur:1000,q_1/${temp.url}`;
                return(
                    <img src={imgUrl} alt="img"></img>
                )
            })
        }
      </section> */}
        <section className="mt-3 d-flex gap-4">
          <div>
            <img
              src={`https://res.cloudinary.com/thetripguru/image/upload/f_auto,w_720,e_blur:1000,q_1/${tour.thumbnail}`}
              alt="img"
            ></img>
          </div>
          
        </section>

        <section className="mt-5 d-flex justify-content-between">

        <div>
            <h4 className="text-center">highlights</h4>
            <div
              className="text-secondary fs-5"
              dangerouslySetInnerHTML={{ __html: tour?.content?.highlights }}
            />
          </div>

          <div>
          <div>
            <h4 className="">What is Included</h4>
            <div
              className="text-secondary fs-5"
              dangerouslySetInnerHTML={{ __html: tour?.content?.included }}
            />
          </div>
          <div>
            <h4 className="">What is Excluded</h4>
            <div
              className="text-secondary fs-5"
              dangerouslySetInnerHTML={{ __html: tour?.content?.excluded }}
            />
          </div>
          </div>
        </section>
      </section>
    </>
  );
};
