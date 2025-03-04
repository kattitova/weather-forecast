import styled from 'styled-components';

export const CitySelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const Button = styled.div<{ $status?: string }>`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: ${(props) =>
    props.$status === 'open' ? '12px solid #9a999f' : '12px solid #dbdae1'};
`;

export const Icons = styled.div`
  display: flex;
  gap: 5px;
  padding: 0 !important;
  width: 37px;
`;

export const DeleteIcon = styled.img<{ $pin: boolean }>`
  opacity: ${(props) => (props.$pin ? '0.1' : '0.5')};
  cursor: ${(props) => (props.$pin ? 'not-allowed' : 'pointer')};
`;
