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

  div {
    border-radius: 5px;
    border: 1px solid #dfdfdf;
    padding: 10px;

    p {
      color: #9d9d9d;
      font-size: 10px;
    }

    span {
      justify-self: center;
      display: flex;
      align-items: center;
      gap: 5px;
      font-weight: 600;
      margin: 10px 0 5px;
    }
  }

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
