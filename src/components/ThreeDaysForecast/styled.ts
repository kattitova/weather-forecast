import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  gap: 10px;
`;

export const ForecastWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  div:nth-child(2) {
    flex-direction: row-reverse;
  }
`;
