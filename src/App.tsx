import styled from "styled-components";
import Background from './assets/images/background.png';
import { EventsType } from "./types/event";
import EventContainer from "./components/EventContainer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { useState } from "react";


type AppProps = {
  eventsList: EventsType[],
}



const AppContainer = styled.main`
background-image: url(${Background});
background-size: cover;
background-repeat: no-repeat;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;

const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 75vw;
  height: 100vh;
`

const Title = styled.h1`
  font-family: 'PT Sans', sans-serif;
  font-size: 56px;
  line-height: 67.2px;
  display: inline-block;
  align-self: flex-start;
  max-width: 411px;
  word-wrap: break-word;
  color: #42567A;
  padding: 0 0 0 58px;
  margin: 0;
  position: relative;
    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 120px;
      height: 3.75px;
      rotate: 90deg;
      background: linear-gradient(0.25turn, #3877EE, #EF5DA8);
      left: -58px;
      top: 65px;
    }
`;

const BackgroundLinesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
`;

const Content = styled.div`
  height: 75vh;
  width: 100%;
  z-index: 3;
  /* display: flex; */
  /* flex-direction: column; */
  /* position: relative; */
  /* overflow: hidden; */

  display: grid;
`;

const Square = styled.div`
  border: 1px solid #42567A;
  border-bottom: 0;
  border-top: 0;
  width: 50%;
  opacity: 0.1;
   &:nth-child(1) {
      border-bottom: 1px solid #42567A;
      border-right: 0;
      height: calc(100% * 0.4);
   }
   &:nth-child(2) {
      border-bottom: 1px solid #42567A;
      height: calc(100% * 0.4);
  }
  &:nth-child(3) {
      border-right: 0;
      height: 440px;
      height: calc(100% * 0.6);
   }
   &:nth-child(4) {
    height: calc(100% * 0.6);
   }
`;

const Circle = styled.div`
  width: 28vw;
  height: 49.778vh;
  border-radius: 50%;
  position: absolute;
  border: 1px solid #42567A;
  transform: translate(-50%, -70%);
  top: 50%;
  left: 50%;
  z-index: 2;
  opacity: 0.1;
`;

const Dates = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  z-index: 4;
  /* position: absolute; */
  /* top: 25%; */
  /* left: 25%; */
`;

const DateText = styled.span`
  font-size: 150px;
  text-transform: uppercase;
  margin: 0;
  font-family: 'PT Sans', sans-serif;
  font-weight: 600;
  @media screen and (max-width: 1440px) {
    font-size: 110px;
  }
`;

const DateTextBlue = styled(DateText)`
  color: #5D5FEF;
`;

const DateTextPink = styled(DateText)`
  color: #EF5DA8;
`;

const Slides = styled.span`
  font-size: 14px;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  /* align-self: flex-end; */
  /* position: absolute; */
  /* bottom: 35%; */
  /* left: 58px; */
`;

const SwiperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  /* bottom: 0; */
  /* left: 58px; */
  width: 70vw;
  justify-self: center;
`;

function App({ eventsList }: AppProps): JSX.Element {

  const [firstDate, setFirstDate] = useState('');
  const [secondDate, setSecondDate] = useState('');

  return (
    <AppContainer>
      <AppContent>
        <BackgroundLinesContainer>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
        </BackgroundLinesContainer>
        <Circle />

        <Content>
          <Title>Исторические даты</Title>
          <Dates>
            <DateTextBlue>2015</DateTextBlue>
            <DateTextPink>2022</DateTextPink>

          </Dates>
          {/* <Slides>01/06</Slides> */}


          <SwiperContainer>
              <EventContainer eventsList={eventsList}/>
          </SwiperContainer>          

        </Content>
      
      </AppContent>
      
    </AppContainer>
  );
}

export default App;
