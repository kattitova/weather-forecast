import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledTemperatureChart = styled.div`
  border-radius: 5px;
  border: 1px solid #dfdfdf;
  padding: 10px;
  padding-right: 20px;
  margin-bottom: 10px;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 10px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #9d9d9d;
  font-size: 16px;

  &.active {
    color: #000;
    font-weight: bold;
  }
`;
