import { useSelector } from 'react-redux';
import * as S from './styled';
import { selectCurrentCity } from '../../store/cities/selectors';
import { useState } from 'react';
import { SelectRender } from './SelectRender';

export const CitySelect = () => {
  const pinnedCity = useSelector(selectCurrentCity);

  const [dropDownListStatus, setDropDownListStatus] = useState('close');

  const handleToggleDropDownList = () => {
    setDropDownListStatus((prevState) =>
      prevState === 'open' ? 'close' : 'open'
    );
  };

  return (
    <S.Wrapper>
      <S.CitySelect onClick={handleToggleDropDownList}>
        {pinnedCity.cityName}
        <S.Button $status={dropDownListStatus} />
      </S.CitySelect>
      <SelectRender
        onClick={handleToggleDropDownList}
        status={dropDownListStatus}
      />
    </S.Wrapper>
  );
};
