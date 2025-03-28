import styled from 'styled-components';

export const CityCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h2`
  font-size: 20px;
`;

export const WeatherInfo = styled.section`
  position: absolute;
  top: 38px;
  color: #fff;
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: flex-end;
  padding: 10px 25px;
  align-items: center;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(34, 4, 61, 0.6019199916294643) 0%,
    rgba(255, 255, 255, 0) 75%
  );

  img {
    width: 50px;
    height: auto;
    filter: invert(1);
  }
`;

export const Background = styled.img`
  border-radius: 10px;
  width: 100%;
  object-fit: cover;
  height: 250px;
`;

export const StyledData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CurrentTemp = styled.div`
  display: flex;

  p {
    font-size: 40px;
    font-weight: 600;
    line-height: 1;
    font-stretch: condensed;
  }

  span {
    font-size: 12px;
  }
`;

export const CityCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
