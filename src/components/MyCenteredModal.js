import React, { useEffect, useState } from "react";
import { TiWorldOutline } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";

import Modal from "react-bootstrap/Modal";

export const MyCenteredModal = ({
  destinations,
  categories,
  searchRef,
  setSelectedSearchedItem,
  selectedSearchedItem,
  searchName,
}) => {
  const [lgShow, setLgShow] = useState(false);
  const [content, setContent] = useState([]);
  const [showContent, setShowContent] = useState([]);

  useEffect(() => {
    if (destinations) {
      setContent(destinations);
      setShowContent(destinations);
      console.log(destinations);
    }
    if (categories) {
      setContent(categories);
      setShowContent(categories);
      console.log(categories);
    }
  }, [destinations, categories]);

  const updateContent = () => {
    const searchedContent = content.filter((temp) => {
      if (
        temp.name.toLowerCase().includes(searchRef.current.value.toLowerCase())
      ) {
        return temp;
      }
    });
    setShowContent(searchedContent);
  };

  const handleSelectCategory = (category) => {
    setSelectedSearchedItem(category);
    searchRef.current.value = "";
    setShowContent(content);
    setLgShow(false);
  };

  return (
    <>
      <button
        style={{backgroundColor:'#F6F6F6'}}
        className="w-50 py-2 px-2 rounded border-0 fs-5"
        type="button"
        onClick={() => setLgShow(true)}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div className="me-2 fs-3  text-secondary">
              <TiWorldOutline  />{" "}
            </div>
            <div>
              <span className="text-secondary">{searchName}</span>
              <p>{selectedSearchedItem ? selectedSearchedItem.name : "All"}</p>
            </div>
          </div>
          <div className="fs-3 text-secondary">
            <IoIosArrowDown />
          </div>
        </div>
      </button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Explore Experiences
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Search
            </span>
            <input
              ref={searchRef}
              type="text"
              onChange={() => updateContent()}
              className="form-control"
              aria-describedby="basic-addon1"
            />
          </div>

          <section
            style={{
              maxHeight: "400px",
              overflowY: "scroll",
              scrollbarWidth: "thin",
            }}
          >
            <div className="row">
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handleSelectCategory({ name: "All" })}
                className="col-6 pb-3"
              >
                <div
                  className="card text-center py-5 text-white"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
                    backgroundSize: "cover",
                  }}
                >
                  <h4>All</h4>
                </div>
              </div>
              {destinations &&
                showContent.map((destination) => {
                  const url = `https://res.cloudinary.com/thetripguru/image/upload/f_auto,c_limit,w_720,q_auto/${destination.thumbnail}`;
                  return (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSelectCategory(destination)}
                      className="col-6 pb-3"
                    >
                      <div
                        className="card text-center py-5 text-white"
                        style={{
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${url})`,
                          backgroundSize: "cover",
                        }}
                      >
                        <h4>{destination.name}</h4>
                      </div>
                    </div>
                  );
                })}

              {categories &&
                showContent.map((category) => {
                  const url = `https://res.cloudinary.com/thetripguru/image/upload/f_auto,c_limit,w_720,q_auto/${category.thumbnail}`;
                  return (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSelectCategory(category)}
                      className="col-6 pb-3"
                    >
                      <div
                        className="card text-center py-5 text-white"
                        style={{
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${url})`,
                          backgroundSize: "cover",
                        }}
                      >
                        <h4>{category.name}</h4>
                      </div>
                    </div>
                  );
                })}
            </div>
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
};
