import { useState } from 'react';
import * as S from './styled';

interface ISelectProps {
  onClick: () => void;
  status: string;
}

interface IRenderProps {
  onClick: () => void;
}

interface IProps {
  SelectComponent: React.ComponentType<ISelectProps>;
  RenderComponent: React.ComponentType<IRenderProps>;
}

export const DropDownList: React.FC<IProps> = ({
  SelectComponent,
  RenderComponent,
}) => {
  const [dropDownListStatus, setDropDownListStatus] = useState('close');

  const handleToggleDropDownList = () => {
    setDropDownListStatus((prevState) =>
      prevState === 'open' ? 'close' : 'open'
    );
  };

  return (
    <S.StyledWrapper>
      <SelectComponent
        onClick={handleToggleDropDownList}
        status={dropDownListStatus}
      />
      <S.DropDownList
        $status={dropDownListStatus}
        data-status={dropDownListStatus}
      >
        <RenderComponent onClick={handleToggleDropDownList} />
      </S.DropDownList>
    </S.StyledWrapper>
  );
};
