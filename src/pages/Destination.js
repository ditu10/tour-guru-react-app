import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Spinner } from "react-bootstrap";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMdClock } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { TopNavbar } from "../shared/TopNavbar";
import { MyCenteredModal } from "../components/MyCenteredModal";
import { TourCard } from "../components/TourCard";

export const Destination = () => {
  const { slug } = useParams();
  const [tours, setTours] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({ name: "All" });
  const [loading, setLoading] = useState(true);
  let searchRef = useRef();

  useEffect(() => {
    setTours([]);
    setLoading(true);
    let url = `https://api.thetripguru.com/api/tours/?location__city__slug=${slug}&categories__url=${selectedCategory.slug}&min_price=0&max_price=2475&limit=200`;
    if (selectedCategory?.name.toLowerCase() === "all") {
      url = `https://api.thetripguru.com/api/tours/?location__city__slug=${slug}&categories__url=&min_price=0&max_price=2475&limit=200`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTours(data.data);
        setLoading(false);
      });
  }, [selectedCategory]);

  useEffect(() => {
    fetch(
      `https://api.thetripguru.com/api/categories/?destination_slug=${slug}&limit=100`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setAvailableCategories(data.data);
      });
  }, []);
  return (
    <>
      <TopNavbar />
      <section className="text-center container">
        <MyCenteredModal
          searchRef={searchRef}
          setSelectedSearchedItem={setSelectedCategory}
          categories={availableCategories}
          searchName="Category"
          selectedSearchedItem={selectedCategory}
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
            return <TourCard tour={tour} index={index} />
          })}
        </div>
      </section>
    </>
  );
};
