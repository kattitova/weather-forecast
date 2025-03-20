import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 40px;
  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(to top, #4040a8, #ab63fa) border-box;
  border: 4px solid transparent;

  header {
    display: flex;
    align-items: center;
    height: 70px;
    width: 100%;
    padding: 10px 20px;
    border-bottom: 2px solid #efefef;
    gap: 10px;

    h1 {
      font-size: 24px;
      color: #1f2b57;
    }

    img {
      height: 100%;
    }
  }

  main {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`;

export const CitiesWrapper = styled.div`
  padding: 10px 20px;
`;

export const RightBar = styled.div`
  background-color: #f6f4fc;
  height: 100%;
  border-bottom-right-radius: 40px;
`;
