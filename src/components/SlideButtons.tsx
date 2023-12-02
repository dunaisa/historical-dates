// import { React } from 'react';
import { styled } from 'styled-components';
import { useSwiper } from 'swiper/react';
import NextIcon from '../assets/images/next-icon.png'
import PrevIcon from '../assets/images/prev-icon.png'

const EventContainerBtn = styled.button`
width: 50px;
height: 50px;
border-radius: 50%;
color: #42567A;
cursor: pointer;
background: transparent;
border: 1px solid #42567A;

opacity: 0.5;
 &:hover {
  opacity: 1;
 }
`;

const BtnWrapper = styled.div`
display: flex;
grid-row: 1;
gap: 20px;
margin: 0 0 35px;
`;

const BtnImg = styled.img`
width: 6px;
height: 12px;
`;

function SlideButtons() {
  const swiper = useSwiper();

  return (
    <BtnWrapper>
      <EventContainerBtn onClick={() => swiper.slidePrev()}>
        <BtnImg src={PrevIcon}/>
      </EventContainerBtn>
      <EventContainerBtn onClick={() => swiper.slideNext()}>
        <BtnImg src={NextIcon}/>
      </EventContainerBtn>
    </BtnWrapper>
    
  )
}

export default SlideButtons;