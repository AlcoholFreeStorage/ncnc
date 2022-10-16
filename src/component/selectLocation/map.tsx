import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import maps from "../../assets/styles/maps";
import theme from "../../assets/styles/theme";
const Map = () => {
  return (
    <ImgWrapper>
      {maps.map((el, index) => (
        <div key={index}>
          <Image
            aria-label={el.city}
            title={el.city}
            src={el.url}
            alt={el.city}
            position_top={el.position_top}
            position_left={el.position_left}
          />
        </div>
      ))}
    </ImgWrapper>
  );
};
export default Map;
const ImgWrapper = styled.section`
  position: relative;
  display: flex;
  min-width: 550px;
  max-width: 1400px;
  height: 500px;
  flex-wrap: wrap;
`;

const Image = styled.img<{ position_top?: number; position_left?: number }>`
  position: absolute;
  top: ${(props) => (props.position_top ? `${props.position_top}px` : "0px")};
  left: ${(props) =>
    props.position_left ? `${props.position_left}px` : "0px"};
  transition: 0.5s ease transform;
  z-index: 10;
  &:hover {
    transform: scale(1.3);
    filter: invert(52%) sepia(72%) saturate(243%) hue-rotate(144deg)
      brightness(89%) contrast(98%);
    transition: 0.5s ease transform;
    z-index: 20;
  }
`;
