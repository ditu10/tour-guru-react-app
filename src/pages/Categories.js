import React, { useState } from 'react'
import { TopNavbar } from '../shared/TopNavbar'
import {categories as ct} from '../mock/categories'

export const Categories = () => {
  const [categories, setCategories] = useState(ct);

  return (
      <>
          <TopNavbar />
          <div className='row mx-md-3 mt-5 mx-lg-5'>
          {
            categories.map((favourite, index) => {
              const url = 'https://res.cloudinary.com/thetripguru/image/upload/f_auto,c_limit,w_720,q_auto/' + favourite.thumbnail
              console.log(url)
              
                  
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
      </>
  )
}
