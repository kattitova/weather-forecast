import styled from 'styled-components';

export const CityCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-size: 20px;
  }

  section {
    position: absolute;
    top: 40px;
    color: #fff;
    display: flex;
    gap: 10px;
    width: 100%;
    justify-content: flex-end;
    padding: 10px 25px;
    align-items: center;

    img {
      width: 50px;
      height: auto;
      filter: invert(1);
    }
  }

  img {
    border-radius: 10px;
    width: 300px;
    width: 100%;
    object-fit: cover;
    height: 250px;
  }
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
