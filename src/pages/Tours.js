import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import { TopNavbar } from "../shared/TopNavbar";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "react-bootstrap/Spinner";
import { TourCard } from "../components/TourCard";

export const Tours = () => {
  const [tours, setTours] = useState([]);
  const [nextApi, setNextApi] = useState("");
  let [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(
      `https://api.thetripguru.com/api/tours/?location__city__slug=&categories__url=&min_price=0&max_price=2475&limit=12&ordering=-bookings`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTotal(data.meta.total);
        setNextApi(data.meta.cursor.next);
        setTours(data.data);
        setLoading(false)
      });
  }, []);

  const fetchMoreData = () => {
    fetch(nextApi)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meta.cursor.next);
        setNextApi(data.meta.cursor.next);
        setTours([...tours, ...data.data]);
      });
  };

  return (
    <>
      <TopNavbar />
      <section className="container">
        <h3 className="text-center mb-4">Total available tours: {total} </h3>
        <InfiniteScroll
          dataLength={tours.length}
          next={fetchMoreData}
          hasMore={tours.length >= total ? false : true}
          loader={
            <div className="text-center mt-3">
              <Spinner className="" animation="grow" />
            </div>
          }
        >
          {loading && (
            <div className="text-center mt-3">
              <Spinner className="" animation="grow" />
            </div>
          )}
          <div className="row mx-md-3 mt-5 mx-lg-5">
            {tours.map((tour, index) => {
              return <TourCard tour={tour} />
            })}
          </div>
        </InfiniteScroll>
      </section>
    </>
  );
};
