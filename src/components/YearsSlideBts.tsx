// import { React } from 'react';
import { styled } from 'styled-components';
import { useSwiper } from 'swiper/react';
import NextIcon from '../assets/images/next-icon.png'
import PrevIcon from '../assets/images/prev-icon.png'

const EventsBtn = styled.button`
width: 30px;
height: 30px;
border-radius: 50%;
color: #42567A;
cursor: pointer;
background: #ffffff;
border: 1px solid #42567A;
z-index: 10;
position: absolute;
box-shadow: 0 0 5px #5b7ad8;

opacity: 0.5;
 &:hover {
  opacity: 1;
 }
`;

const EventContainerBtnNext = styled(EventsBtn) `
right: 0;
top: 50%;
`;

const EventContainerBtnPrev = styled(EventsBtn) `
left: 0;
top: 50%;
`;

const BtnImg = styled.img`
width: 6px;
height: 12px;
`;

function YearsSlideBts() {
  const swiperS = useSwiper();

  return (
    <>
      <EventContainerBtnPrev onClick={() => swiperS.slidePrev()}>
        <BtnImg src={PrevIcon}/>
      </EventContainerBtnPrev>
      <EventContainerBtnNext onClick={() => swiperS.slideNext()}>
        <BtnImg src={NextIcon}/>
      </EventContainerBtnNext>
    </>
    
  )
}

export default YearsSlideBts;