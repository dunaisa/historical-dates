import { styled } from "styled-components";
import { EventType } from "../types/event";
import { Fragment } from "react";

type EventsListProps = {
  event: EventType[]
};

function EventsList({event}: EventsListProps): JSX.Element {
  const EventList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EventItem = styled.li`
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

  return (
    <EventList>

      {
        event.map((item) => (
          <Fragment key={item.date}>
            <EventItem>
              <EventDate>{item.date}</EventDate>
              <EventDescription>{item.description}</EventDescription>
            </EventItem>
          </Fragment>
        ))
      }

      
      {/* <EventItem>
        <EventDate>1990</EventDate>
        <EventDescription>борьба экономических программ перехода СССР к рынку</EventDescription>
      </EventItem>
      <EventItem>
        <EventDate>1990</EventDate>
        <EventDescription>борьба экономических программ перехода СССР к рынку</EventDescription>
      </EventItem>
      <EventItem>
        <EventDate>1990</EventDate>
        <EventDescription>борьба экономических программ перехода СССР к рынку</EventDescription>
      </EventItem>
      <EventItem>
        <EventDate>1990</EventDate>
        <EventDescription>борьба экономических программ перехода СССР к рынку</EventDescription>
      </EventItem>
      */}
    </EventList> 
  )
}

export default EventsList;