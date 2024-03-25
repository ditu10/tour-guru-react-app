import React, { useEffect, useState } from 'react'
import { ControlledCarousel } from '../components/ControlledCarousel'
import { TopNavbar } from '../shared/TopNavbar'
import {categories as ct} from '../mock/categories';
import {poluparTours as pp} from '../mock/popular';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  const [categories, setCategories] = useState([]);
  const [favourites, setFavourites] = useState([]);
  useEffect(() => {
    setCategories(ct)
    setFavourites(pp)
  })

  return (
    <div>
      <TopNavbar />
       
      <div style={{ backgroundColor: '#F6F6F6' }} className='py-5'>
        <div className='container d-flex gap-5'>
          <div className='my-4 py-4'>
            <h1 className='font-very-large'>Experiences</h1>
            <h1 className='font-very-large'>that last</h1>
            <h1 className='primary-color font-very-large'>forever</h1>
            <h3 className='pt-3'><span className='primary-color'>Eco-friendly</span> <span className='text-secondary'>guided excursions by amazing locals</span></h3>
          </div>

          <div >
            <img className='rounded' style={{overflow: 'hidden' }} src='https://media.istockphoto.com/id/644112076/photo/woman-with-her-hand-out-of-the-car-window.jpg?s=612x612&w=0&k=20&c=nY22blt6sXEFo5R1aeCnPDEwOgKHI0tH3iVCmWNCwY8=' alt='tour.jpg' />
          </div>
        </div>
      </div>

      

      <section className='text-center mt-4 container-fluid'>
        <h1 className=''>Where to next?</h1>
        <h3 className='text-secondary'>Discover eco-friendly experiences based on your interests</h3>
        <div className='row mx-md-3 mt-5 mx-lg-5 '>
          {
            categories.map((category, index) => {
              const url = 'https://res.cloudinary.com/thetripguru/image/upload/f_auto,c_limit,w_720,q_auto/' + category.thumbnail
              console.log(url)
              if (index < 5)
                  
                  return (
                    <div className='col-lg-3 col-md-6 col-12 mb-4'>
                      <div className='card border-0' style={{ height: '24rem' }}>
                        <div className='card-body d-flex justify-content-center align-items-end rounded'  style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${url})`}}>
                        <div>
                          <h1 className='text-white pb-2'>{category.name}</h1>
                          <h5 className='text-white border rounded-pill'>Discover {category.tour_count} tours</h5>
                        </div> 
                      </div>
                    </div>
                  </div>
                  )
              })
          }
          
          
             <div className='col-lg-3 col-md-6 col-12 mb-4'>
                <NavLink className="text-decoration-none" to={'/categories'}>
                  <div className='card border-0' style={{ height: '24rem' }}>
                  <div className='card-body d-flex justify-content-center align-items-center rounded'  style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`}}>
                    <div>
                      <h1 className='text-white pb-2'>View All categories</h1>
                          
                    </div> 
                  </div>
                </div>
                </NavLink>
             </div>
         
        </div>
      </section>
      
      <section className='container-fluid text-center mt-5'>
        <div>
          <h1 className=''>Favorite destinations</h1>
          <h3 className='text-secondary'>Choose from 25 enchanting cities and over 350 eco-friendly guided experiences</h3>
        </div>

        <div className='row mx-md-3 mt-5 mx-lg-5'>
          {
            favourites.map((favourite, index) => {
              const url = 'https://res.cloudinary.com/thetripguru/image/upload/f_auto,c_limit,w_720,q_auto/' + favourite.thumbnail
              console.log(url)
              if (index < 8)
                  
                  return (
                    <div className='col-lg-3 col-md-6 col-12 mb-4'>
                      <div className='card border-0' style={{ height: '24rem' }}>
                        <div className='card-body d-flex align-items-end justify-content-center rounded'  style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${url})`}}>
                        <div>
                          <h1 className='text-white pb-2'>{favourite.name}</h1>
                          <h5 className='text-white border rounded-pill px-3'>Discover {favourite.tour_count} tours</h5>
                        </div> 
                      </div>
                    </div>
                  </div>
                  )
              })
            }
        </div>


      </section>
    </div>
  )
}
