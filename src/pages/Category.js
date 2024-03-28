import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { TopNavbar } from "../shared/TopNavbar";
import { MyCenteredModal } from "../components/MyCenteredModal";
import { Card, Spinner } from "react-bootstrap";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMdClock } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { TourCard } from "../components/TourCard";

export const Category = () => {
  const { slug } = useParams();
  const [tours, setTours] = useState([]);
  const [availableDestination, setAvailableDestination] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDestination, setSelectedDestination] = useState({
    name: "All",
  });
  let searchRef = useRef();
  useEffect(() => {
    setTours([]);
    setLoading(true);
    let url = `https://api.thetripguru.com/api/tours/?location__city__slug=${selectedDestination.slug}&categories__url=${slug}&min_price=0&max_price=2475&limit=200`;
    if (selectedDestination?.name?.toLocaleLowerCase() === "all") {
      url = `https://api.thetripguru.com/api/tours/?location__city__slug=&categories__url=${slug}&min_price=0&max_price=2475&limit=200`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTours(data.data);
        setLoading(false);
      });
  }, [selectedDestination]);

  useEffect(() => {
    fetch(
      `https://api.thetripguru.com/api/destinations/?response_type=default&category_slug=${slug}&limit=100`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setAvailableDestination(data.data);
      });
  }, []);

  return (
    <div>
      <TopNavbar />
      <section className="text-center container">
        <MyCenteredModal
          searchRef={searchRef}
          destinations={availableDestination}
          setSelectedSearchedItem={setSelectedDestination}
          searchName="Destination"
          selectedSearchedItem={selectedDestination}
        />
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

        {loading && (
          <div className="text-center mt-3">
            <Spinner className="" animation="grow" />
          </div>
        )}

        <div className="row mx-md-3 mt-5 mx-lg-5">
          {tours.map((tour, index) => {
            return <TourCard tour={tour} index={index} />;
          })}
        </div>
      </section>
    </div>
  );
};
