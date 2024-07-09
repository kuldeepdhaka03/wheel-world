import React from 'react'
import './Booking.css'
import CarData from '../../assets/Data/bookingCars'

import Car from '../../components/pages/Car'

const Booking = () => {
  return <div className="booking">
    <div className="booking_wrapper">
      <h2 className="booking_title">Booking</h2>

      <div className="filter_widget_wrapper">
      <div className="filter_widget_01">
            <select>
              <option value="New">New</option>
              <option value="Popular">Popular</option>
              <option value="Upcoming">Upcoming</option>
            </select>
      </div>
      <div className="filter_widget_02">
            <select>
              <option value="toyota">Toyota</option>
              <option value="bmw">Bmw</option>
              <option value="audi">Audi</option>
            </select>
      </div>

      </div>

      <div className="booking_car_list">
       {
        CarData?.map((item)=>(<Car item={item} key={item.id}/>

         ))}
        </div>
      </div>

    </div>
  
   
}

export default Booking