import { styled, css } from "styled-components";
import { EventType } from "../types/event";
import { Fragment, useEffect, useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Controller } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import YearsSlideBts from "./YearsSlideBts";

import PrevIcon from '../assets/images/prev-icon.png'
// import 'swiper/scss';
// import 'swiper/scss/navigation';

type EventsListProps = {
  event: EventType[]
};

const EventsList = styled(Swiper)`
display: flex;
justify-content: center;
align-items: start;
width: 70vw;
/* position: relative; */
`;

const EventItem = styled(SwiperSlide)`
display: flex;
flex-direction: column;
gap: 20px;
width: 320px;
flex-wrap: wrap;
`;

const EventDate = styled.h2`
font-family: 'PT Sans', sans-serif;
font-weight: 400; 
font-size: 25px;
line-height: 30px;
color: #3877EE;
margin: 0;
padding: 0; 
`;

const EventDescription = styled.p`
font-family: 'PT Sans', sans-serif;
font-weight: 400; 
font-size: 20px;
line-height: 30px;
color: #42567A;
margin: 0;
padding: 0;
`;

const EventsListWrapper = styled.div`
display: flex;
position: relative;
`;


function YearsList({event}: EventsListProps): JSX.Element {

  // const [secondSwiper, setSecondSwiper] = useState(null);

  return (

    <EventsListWrapper>

    <EventsList
      modules={[ Pagination, Scrollbar, A11y, Controller]}
      // onSwiper={setSecondSwiper}
      // controller={{ control: secondSwiper }}
      
      spaceBetween={80}
      slidesPerView={3.5}
      >

        
    <YearsSlideBts />

      {
        event.map((item) =>
        { 
          return (

            <EventItem key={item.date}>
              <EventDate>{item.date}</EventDate>
              <EventDescription>{item.description}</EventDescription>
            </EventItem>

        )})
      }
    </EventsList>
    <button>Next</button>
    
    </EventsListWrapper>
    
    
  )
}

export default YearsList;