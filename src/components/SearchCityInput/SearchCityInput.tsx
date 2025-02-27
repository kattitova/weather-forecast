import { ChangeEvent, useEffect, useState } from 'react';
import { getCities } from '../../api';
import * as S from './styled';
import { AppDispatch } from '../../store';
import { useDispatch } from 'react-redux';
import { setSearchCities } from '../../store/cities/citiesActions';

interface IProps {
  onClick: () => void;
  status: string;
}

export const SearchCityInput: React.FC<IProps> = ({
  onClick,
  status,
}: IProps) => {
  const [inputValue, setInputValue] = useState('');
  const dispatch: AppDispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    if (/^[a-zA-Z]*$/.test(value)) {
      setInputValue(value);
    }
  };

  const [searchCitiesList, setSearchCitiesList] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const data = await getCities(inputValue);
      setSearchCitiesList(data.results);
    };

    if (inputValue.length > 1) {
      fetchCities();
    }
  }, [inputValue]);

  useEffect(() => {
    dispatch(setSearchCities(searchCitiesList));
    if (inputValue.length > 1 && status === 'close') onClick();
    if (inputValue.length < 2 && status === 'open') onClick();
  }, [searchCitiesList, inputValue]);

  useEffect(() => {
    if (status === 'close') setInputValue('');
  }, [status]);

  return (
    <S.StyledInput
      type='text'
      placeholder='Search city ...'
      value={inputValue}
      onChange={handleChange}
    />
  );
};
