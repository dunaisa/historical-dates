import { styled } from "styled-components";
import EventsList from "./EventsList";
import { EventsType } from "../types/event";
import { Navigation, Pagination, Scrollbar, A11y, Controller } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SlideButtons from "./SlideButtons";
import { Fragment, useState } from "react";
import EventsBtnsSlider from "./EventsBtnsSlider";

type EventContainerProps = {
  eventsList: EventsType[]
};

const EventContainerWrapper = styled(Swiper)`
  display: grid;
`;

const EventContainerSlide = styled(SwiperSlide)`
  display: flex;
`;

function EventContainer({eventsList}: EventContainerProps): JSX.Element {

  const [firstSwiper, setFirstSwiper] = useState(null);

  return (
    <EventContainerWrapper
    
      modules={[ Pagination, Scrollbar, A11y, Controller]}
      onSwiper={setFirstSwiper}
      controller={{ control: firstSwiper }}
      spaceBetween={0}
      initialSlide={1}
      slidesPerView={1}>

        <SlideButtons />

      {
        eventsList.map((el) =>
        {
          return (

          <EventContainerSlide key={el.id}>
            <Fragment>

              <EventsBtnsSlider />

              <EventsList event={el.events}/>
            </Fragment>
          </EventContainerSlide>)}
        
        )
      }    
    </EventContainerWrapper>
  )
}

export default EventContainer;