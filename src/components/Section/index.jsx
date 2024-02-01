import { Swiper, SwiperSlide } from 'swiper/react'
import { Card } from '../card';


import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'

import { useState } from 'react';
import { Container } from "./style";
import { Pagination, Navigation } from 'swiper/modules';

export function Section({title, children }) {
    
    

    const [meals, setMeals] = useState([]);
   
    return (
        <Container >
            <h2>{title}</h2>
            

            <Swiper
               navigation={true}
               slidesPerView={4}
               freeMode={true}
               spaceBetween={200}
               loop={true}
               modules={[Pagination, Navigation]}
               className="mySwiper"
               
            >  
            <SwiperSlide>{children}</SwiperSlide>
            <SwiperSlide>{children}</SwiperSlide>
            <SwiperSlide>{children}</SwiperSlide>
              
              
                
            </Swiper>
           
        </Container>

    )
 }       