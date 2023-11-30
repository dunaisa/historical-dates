import { styled } from "styled-components";
import EventsList from "./EventsList";
import { EventsType } from "../types/event";
import { Fragment } from "react";

type EventContainerProps = {
  eventsList: EventsType[]
};

function EventContainer({eventsList}: EventContainerProps): JSX.Element {

  const EventContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 58px;
  gap: 80px;
`;

  return (
    <EventContainer>
      {
        eventsList.map((slide) => 
          <Fragment key={slide.id}>
              <EventsList event={slide.events}/>
          </Fragment>
        )
      }

    </EventContainer>  
    
  )
}

export default EventContainer;