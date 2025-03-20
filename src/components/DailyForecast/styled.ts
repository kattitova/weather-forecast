import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  border-radius: 5px;
  border: 1px solid #dfdfdf;
`;

export const TemperatureWrapper = styled.div`
  background-color: #9d92e3;
  color: #fff;
  width: 50%;
  padding: 20px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 16px;
    filter: brightness(0) saturate(100%) invert(13%) sepia(27%) saturate(4885%)
      hue-rotate(220deg) brightness(89%) contrast(101%);
  }
`;

export const TemperatureInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  & + :last-child {
    img {
      rotate: 180deg;
    }
  }
`;

export const DayWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  width: 50%;
  font-weight: 600;
  text-align: center;

  div {
    margin-right: 0;
  }

  span {
    color: #4040a8;
    font-size: 10px;
    font-weight: 400;
  }

  img {
    width: 30px;
    filter: brightness(0) saturate(100%) invert(24%) sepia(79%) saturate(1273%)
      hue-rotate(219deg) brightness(88%) contrast(95%);
  }
`;
