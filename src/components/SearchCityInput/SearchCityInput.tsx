import { ChangeEvent, useEffect, useState } from 'react';
import * as S from './styled';
import { AppDispatch } from '../../store';
import { useDispatch } from 'react-redux';
import { getSearchCities } from '../../store/searchCities/thunks';
import { PHRASES } from '../../constants/phrases';

interface IProps {
  onClick: () => void;
  status: string;
}

export const SearchCityInput: React.FC<IProps> = ({ onClick, status }) => {
  const [inputValue, setInputValue] = useState('');
  const dispatch: AppDispatch = useDispatch();

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

    if (inputValue.length > 1 && status === 'close') onClick();
    if (inputValue.length < 2 && status === 'open') onClick();
  }, [inputValue]);

  useEffect(() => {
    if (status === 'close') setInputValue('');
  }, [status]);

  return (
    <S.StyledInput
      type='text'
      placeholder={PHRASES.SEARCH_CITY}
      value={inputValue}
      onChange={handleChange}
    />
  );
};
