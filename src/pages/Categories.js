import React, { useState } from 'react'
import { TopNavbar } from '../shared/TopNavbar'
import {categories as ct} from '../mock/categories'
import { NavLink } from 'react-router-dom';
import { Form } from 'react-bootstrap';

export const Categories = () => {
  const [categories, setCategories] = useState(ct);

  return (
      <>
          <TopNavbar />
          <div className='text-center'>
          <h1 className='mt-4'>Where to next?</h1>
          <h3 className='text-secondary'>Discover eco-friendly experiences based on your interests</h3>
          </div>
          <div className='text-center'>
          <Form.Control
              type="search"
              placeholder="Search"
              className="w-50 mx-auto d-block "
              aria-label="Search"
              
            />
             </div>
            
          <div className='row mx-md-3 mt-5 mx-lg-5'>
          {
            categories.map((category, index) => {
              const url = 'https://res.cloudinary.com/thetripguru/image/upload/f_auto,c_limit,w_720,q_auto/' + category.thumbnail
              console.log(url)
              
                  
                  return (
                    <div className='col-lg-3 col-md-6 col-12 mb-4'>
                      <NavLink className="text-decoration-none" to={`/categories/${category.slug}`}>
                      <div className='card border-0' style={{ height: '24rem' }}>
                        <div className='card-body d-flex align-items-end justify-content-center rounded'  style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${url})`}}>
                        <div>
                          <h1 className='text-white pb-2'>{category.name}</h1>
                          <h5 className='text-white border rounded-pill px-3'>Discover {category.tour_count} tours</h5>
                        </div> 
                      </div>
                    </div>
                    </NavLink>
                  </div>
                  )
              })
            }
        </div>
      </>
  )
}
