import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  gap: 10px;

  section {
    display: flex;
    flex-direction: column;
    gap: 20px;

    div:nth-child(2) {
      flex-direction: row-reverse;
    }
  }
`;
