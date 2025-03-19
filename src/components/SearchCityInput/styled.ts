import styled, { css } from 'styled-components';

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
`;

const styledItem = css`
  display: flex;
  justify-content: space-between;
  padding: 6px 10px;
`;

export const DropDownItem = styled.div`
  ${styledItem};

  &:not(:last-child) {
    border-bottom: 1px dashed #dfdfdf;
  }

  &:hover {
    cursor: pointer;
    background-color: #dbdae1;
  }
`;

export const DropDownInfoItem = styled.div`
  ${styledItem};
`;

export const StyledInput = styled.input`
  border: none;

  &::placeholder {
    color: rgb(192, 190, 190);
    font-size: 12px;
  }
`;
