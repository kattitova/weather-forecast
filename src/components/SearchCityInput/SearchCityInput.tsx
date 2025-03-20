import { ChangeEvent, useEffect, useState } from 'react';
import * as S from './styled';
import { AppDispatch } from '../../store';
import { useDispatch } from 'react-redux';
import { getSearchCities } from '../../store/searchCities/thunks';
import { PHRASES } from '../../constants/phrases';
import { SearchRender } from './components/SearchRender';

export const SearchCityInput = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch: AppDispatch = useDispatch();

  const [dropDownListStatus, setDropDownListStatus] = useState('close');

  const handleToggleDropDownList = () => {
    setDropDownListStatus((prevState) =>
      prevState === 'open' ? 'close' : 'open'
    );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    if (/^[a-zA-Z-\s]*$/.test(value)) {
      setInputValue(value);
    }
  };

  useEffect(() => {
    if (inputValue.length > 2) {
      dispatch(getSearchCities(inputValue));
    }

    if (inputValue.length > 1 && dropDownListStatus === 'close')
      handleToggleDropDownList();
    if (inputValue.length < 2 && dropDownListStatus === 'open')
      handleToggleDropDownList();
  }, [inputValue]);

  useEffect(() => {
    if (dropDownListStatus === 'close') setInputValue('');
  }, [dropDownListStatus]);

  return (
    <S.Wrapper>
      <S.StyledInput
        type='text'
        placeholder={PHRASES.SEARCH_CITY}
        value={inputValue}
        onChange={handleChange}
      />
      <SearchRender
        onClick={handleToggleDropDownList}
        status={dropDownListStatus}
      />
    </S.Wrapper>
  );
};
