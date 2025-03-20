import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 20px;
`;

export const StyledHighlights = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr) 2fr;
  gap: 15px;

  & > :last-child {
    span {
      img {
        width: 20px;
        height: 20px;
        background-color: #9d92e3;
        padding: 3px;
        border-radius: 50%;
      }
      & > :last-child {
        rotate: 180deg;
        margin-left: 10px;
      }
    }
  }
`;

export const Highlight = styled.div`
  border-radius: 5px;
  border: 1px solid #dfdfdf;
  padding: 10px;
`;

export const HighlightTitle = styled.p`
  color: #9d9d9d;
  font-size: 10px;
`;

export const HighlightText = styled.span`
  justify-self: center;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  margin: 10px 0 5px;
`;
