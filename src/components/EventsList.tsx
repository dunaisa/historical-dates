import { styled, css } from "styled-components";
import { EventType } from "../types/event";
import { Fragment, useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Controller } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import EventsBtnsSlider from "./EventsBtnsSlider";
// import 'swiper/scss';
// import 'swiper/scss/navigation';

type EventsListProps = {
  event: EventType[]
};


const EventList = styled(Swiper)`
display: flex;
justify-content: center;
align-items: start;
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

function EventsList({event}: EventsListProps): JSX.Element {

  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <>
    <EventList
      modules={[ Pagination, Scrollbar, A11y, Controller]}
      onSwiper={setSecondSwiper}
      controller={{ control: secondSwiper }}
      spaceBetween={80}
      slidesPerView={3}>

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
    </EventList>

    </>
    
  )
}

export default EventsList;