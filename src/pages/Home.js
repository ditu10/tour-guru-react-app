import React, { useEffect, useState } from "react";
import { TopNavbar } from "../shared/TopNavbar";
import { categories as ct } from "../mock/categories";
import { poluparTours as pp } from "../mock/popular";
import { NavLink } from "react-router-dom";
import { Heading } from "../components/Home/Heading";
import { DefaultCard } from "../components/Home/DefaultCard";
import { TourCard } from "../components/TourCard";

export const Home = () => {
  const [categories, setCategories] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [signatureTour, setSignatureTour] = useState([]);

  useEffect(() => {
    setCategories(ct);
    setFavourites(pp);
    fetch("https://api.thetripguru.com/api/tours/popular/?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setSignatureTour(data.data);
      });
  },[]);

  return (
    <div>
      <TopNavbar />

      <div style={{ backgroundColor: "#F6F6F6" }} className="py-5">
        <div className="container d-flex gap-5">
          <div className="my-4 py-4">
            <h1 className="font-very-large">Experiences</h1>
            <h1 className="font-very-large">that last</h1>
            <h1 className="primary-color font-very-large">forever</h1>
            <h3 className="pt-3">
              <span className="primary-color">Eco-friendly</span>{" "}
              <span className="text-secondary">
                guided excursions by amazing locals
              </span>
            </h3>
          </div>

          <div>
            <img
              className="rounded"
              style={{ overflow: "hidden" }}
              src="https://media.istockphoto.com/id/644112076/photo/woman-with-her-hand-out-of-the-car-window.jpg?s=612x612&w=0&k=20&c=nY22blt6sXEFo5R1aeCnPDEwOgKHI0tH3iVCmWNCwY8="
              alt="tour.jpg"
            />
          </div>
        </div>
      </div>

      <section className="text-center mt-4 container-fluid">
        <Heading
          title="Where to next?"
          subtitle="Discover eco-friendly experiences based on your interests"
        />
        <div className="row mx-md-3 mt-5 mx-lg-5 ">
          {categories.map((category, index) => {
            if (index < 5) return <DefaultCard content={category} />;
          })}

          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <NavLink className="text-decoration-none" to={"/categories"}>
              <div className="card border-0" style={{ height: "24rem" }}>
                <div
                  className="card-body d-flex justify-content-center align-items-center rounded"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
                  }}
                >
                  <div>
                    <h1 className="text-white pb-2">View All categories</h1>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </section>

      <section className="container-fluid text-center mt-5">
        <Heading
          title="Favorite destinations"
          subtitle="Choose from 25 enchanting cities and over 350 eco-friendly guided experiences"
        />

        <div className="row mx-md-3 mt-5 mx-lg-5">
          {favourites.map((favourite, index) => {
            if (index < 8) return <DefaultCard content={favourite} />;
          })}
        </div>
      </section>

      {/* <section className="container text-center mt-5">
        <h1 className="">
          Why Choose Trip<span className="primary-color">Guru</span>
        </h1>
      </section> */}

      <section className="container text-center mt-5 ">
        <Heading
          title="Signature experiences"
          subtitle="Cultural excursions that create a deeper connection between travelers and the destination"
        />

        <div className="row mx-md-3 mt-5 mx-lg-5">
          {signatureTour.map((tour, index) => {
            if (index < 8) return <TourCard tour={tour} index={index} />;
          })}
          <NavLink className="" to={"/tours"}>
            <button oncl className="w-100 btn btn-outline-success py-2">
              Show All Tours
            </button>
          </NavLink>
        </div>
      </section>

      <section className="my-5"></section>
    </div>
  );
};
