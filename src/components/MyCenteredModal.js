import React, {useEffect, useState} from "react";
import { TiWorldOutline } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";

import Modal from "react-bootstrap/Modal";

export const MyCenteredModal = ({destinations, categories, searchRef}) => {
  const [lgShow, setLgShow] = useState(false);
  const [content, setContent] = useState([]);
  const [showContent, setShowContent] = useState([])

    useEffect(() => {
        if(destinations) {
            setContent(destinations)
            setShowContent(destinations)
            console.log(destinations)
        }
        if(categories) {
            setContent(categories)
            setShowContent(categories)
            console.log(categories)
        }
    }, []);

    const updateContent =() =>{
        const searchedContent = content.filter(temp => {
            if(temp.name.toLowerCase().includes(searchRef.current.value.toLowerCase())) {
                return temp;
            }
        })
        setShowContent(searchedContent);
    }

  return (
    <>
      <button
        className="w-50 py-2 px-2 rounded border-0 fs-5"
        type="button"
        onClick={() => setLgShow(true)}
      >
        <div className="d-flex justify-content-between">
          <div>
            <TiWorldOutline />{" "}
            <span className="text-secondary">Destination</span>
          </div>
          <div>
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
              <span className="input-group-text" id="basic-addon1">Search</span>
              <input ref={searchRef} type="text" onChange={()=> updateContent()} className="form-control" placeholder="Username" aria-label="Username"
                     aria-describedby="basic-addon1"/>
            </div>

            <section style={{maxHeight: '600px', overflowY: 'auto', scrollbarWidth: 'thin'}}>
              <div className="row">
                <div className="col-6 pb-3">
                  <div className="card text-center py-5 text-white" style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
                    backgroundSize: "cover",
                  }}>
                    <h4>Any</h4>

                  </div>
                </div>
                {destinations &&
                    destinations.map(destination => {
                      const url = `https://res.cloudinary.com/thetripguru/image/upload/f_auto,c_limit,w_720,q_auto/${destination.thumbnail}`
                      return (
                          <div className="col-6 pb-3">
                            <div className="card text-center py-5 text-white" style={{
                              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${url})`,
                              backgroundSize: "cover",
                            }}>
                              <h4>{destination.name}</h4>

                            </div>
                          </div>
                      )
                    })
                }

                {categories &&
                    categories.map(category => {
                      const url = `https://res.cloudinary.com/thetripguru/image/upload/f_auto,c_limit,w_720,q_auto/${category.thumbnail}`
                      return (
                          <div className="col-6 pb-3">
                            <div className="card text-center py-5 text-white" style={{
                              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${url})`,
                              backgroundSize: "cover",
                            }}>
                              <h4>{category.name}</h4>

                            </div>
                          </div>
                      )
                    })
                }
              </div>
            </section>
        </Modal.Body>
      </Modal>
    </>
);
};
