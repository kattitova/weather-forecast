import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 14px;
  width: 170px;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  padding: 5px 10px;
  position: relative;
  margin-left: auto;

  &:has([data-status='open']) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 0;
  }
`;

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

export const DropDownList = styled.div<{ $status?: string }>`
  display: ${(props) => (props.$status === 'open' ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  background-color: #fff;
  width: 100%;

  left: 0;
  top: 27px;
  outline: 1px solid #dfdfdf;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  z-index: 1;

  img {
    width: 16px;
    height: auto;
    cursor: pointer;

    &:hover {
      scale: 1.2;
    }
  }
`;

export const DropDownItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 10px;

  &:not(:last-child) {
    border-bottom: 1px dashed #dfdfdf;
  }

  &:hover {
    cursor: pointer;
    background-color: #dbdae1;
  }
`;

export const PinIcon = styled.img`
  &[data-pin='true'] {
    opacity: 1;
  }

  &[data-pin='false'] {
    opacity: 0.25;
  }
`;

export const DeleteIcon = styled.img<{ $pin: boolean }>`
  opacity: ${(props) => (props.$pin ? '0.1' : '0.5')};
  cursor: ${(props) => (props.$pin ? 'not-allowed' : 'pointer')};
`;
