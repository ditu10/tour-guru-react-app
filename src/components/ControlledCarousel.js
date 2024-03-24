import React from 'react'
import { useState } from 'react';
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

export const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  
  return (
    <Carousel className='w-75 mx-auto' activeIndex={index} style={{height: "65vh"}} onSelect={handleSelect}>
      <Carousel.Item className='h-100'>
        {/* <Image src='https://gwinnettmagazine.com/wp-content/uploads/2021/04/vacation-696x410.jpg' fluid/>   */}
        <img
          
          className="d-block w-100"
          style={{height: "65vh"}}
          src="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJpcHxlbnwwfHwwfHx8MA%3D%3D"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item className='h-100'>
        <img
          style={{height: "65vh"}}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbGxpbmd8ZW58MHx8MHx8fDA%3D"
          alt="First slide"
        />        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='h-100'>
        <img
          style={{height: "65vh"}}
          className="d-block w-100"
          src="https://burst.shopifycdn.com/photos/hiker-climbing-mountains.jpg?width=1000&format=pjpg&exif=0&iptc=0"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
