import { styled } from "styled-components";
// import EventsList from "./EventsList";
import { EventsType } from "../types/event";
import { Navigation, Pagination, Scrollbar, A11y, Controller } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import PeriodSlideBts from "./PeriodSlideBts";
import { Fragment, useState } from "react";
import EventsBtnsSlider from "./YearsSlideBts";
import YearsList from "./YearsList";

type EventContainerProps = {
  eventsList: EventsType[]
};

const EventContainerWrapper = styled(Swiper)`
  display: grid;
`;

const EventContainerSlide = styled(SwiperSlide)`
  display: flex;
`;




function PeriodContainer({eventsList}: EventContainerProps): JSX.Element {

  const [firstSwiper, setFirstSwiper] = useState(null);

  return (
    <EventContainerWrapper
    
      modules={[ Pagination, Scrollbar, A11y, Controller]}
      // onSwiper={setFirstSwiper}
      // controller={{ control: firstSwiper }}
      spaceBetween={80}
      initialSlide={0}
      slidesPerView={1}
      allowTouchMove={false}
      >

        <PeriodSlideBts />

      {
        eventsList.map((el) =>
          <EventContainerSlide key={el.id}>
              {/* <EventsBtnsSlider /> */}
              <YearsList event={el.events}/>
          </EventContainerSlide>)
      }
        
         
    </EventContainerWrapper>
  )
}

export default PeriodContainer;