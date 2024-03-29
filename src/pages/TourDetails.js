import React, { useEffect, useState } from "react";
import { TopNavbar } from "../shared/TopNavbar";
import { NavLink, useParams } from "react-router-dom";
import {
  MdKeyboardArrowRight,
  MdOutlineFreeCancellation,
} from "react-icons/md";
import { FaMapMarkerAlt, FaRegClock, FaStar } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { ActivityComponent } from "../components/tourDetails/ActivityComponent";
import { IoPeopleSharp } from "react-icons/io5";
import { GiConfirmed } from "react-icons/gi";
import { DetailsComponent } from "../components/tourDetails/DetailsComponent";

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
          to={"/"}
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
          {tour.title}
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

        <section className="mt-3 d-flex gap-4">
          <div>
            <img
              style={{ width: "100%" }}
              src={`https://res.cloudinary.com/thetripguru/image/upload/f_auto,c_limit,w_720,q_auto//${tour.thumbnail}`}
              alt="img"
            ></img>
          </div>
          <div></div>
        </section>

        <section className="mt-4">
          <DetailsComponent color={"primary-color"} title="Highlights">
            <div
              className="text-secondary fs-5"
              dangerouslySetInnerHTML={{ __html: tour?.content?.highlights }}
            />
          </DetailsComponent>

          <div className="py-2">
            <h4 className="primary-color">About this activity</h4>

            <ActivityComponent title={"Location"} value={tour?.location?.name}>
              <FaMapMarkerAlt />
            </ActivityComponent>

            <ActivityComponent title={"Language"} value={tour?.about?.language}>
              <TbWorld />
            </ActivityComponent>

            <ActivityComponent
              title={"Trip type"}
              value={tour?.about?.duration_type}
            >
              <IoPeopleSharp />
            </ActivityComponent>

            <ActivityComponent title={"Duration"} value={tour?.about?.timing}>
              <FaRegClock />
            </ActivityComponent>

            <ActivityComponent
              title={"Confirmation"}
              value={tour?.about?.confirmation_type}
            >
              <GiConfirmed />
            </ActivityComponent>

            <ActivityComponent
              title={"Cancellation policy"}
              value={tour?.about?.cancellation_info}
            >
              <MdOutlineFreeCancellation />
            </ActivityComponent>
          </div>

          <div>
            <DetailsComponent color={"primary-color"} title="What is Included">
              <div
                className="text-secondary fs-5"
                dangerouslySetInnerHTML={{ __html: tour?.content?.included }}
              />
            </DetailsComponent>

            <DetailsComponent color={"text-danger"} title="What is Excluded">
              <div
                className="text-secondary fs-5"
                dangerouslySetInnerHTML={{ __html: tour?.content?.excluded }}
              />
            </DetailsComponent>
          </div>
        </section>
        <section className="">
          <DetailsComponent
            color={"primary-color"}
            title="What you have to bring"
          >
            <div
              className="text-secondary fs-5"
              dangerouslySetInnerHTML={{ __html: tour?.content?.what_to_bring }}
            />
          </DetailsComponent>
        </section>
      </section>
    </>
  );
};
