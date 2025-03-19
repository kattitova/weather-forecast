import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as S from './styled';
import { TemperatureChart } from '../TemperatureChart';
import { PHRASES } from '../../constants/phrases';

export const TemperatureChartWrapper = () => {
  return (
    <BrowserRouter>
      <S.StyledWrapper>
        <h3>{PHRASES.TEMPERATURE_CHART}</h3>
        <S.StyledTemperatureChart>
          <S.Navigation>
            <S.StyledLink to='/' end>
              {PHRASES.TODAY}
            </S.StyledLink>
            <S.StyledLink to='/week-temperature'>{PHRASES.WEEK}</S.StyledLink>
          </S.Navigation>
          <Routes>
            <Route path='/' element={<TemperatureChart period='today' />} />
            <Route
              path='/week-temperature'
              element={<TemperatureChart period='week' />}
            />
          </Routes>
        </S.StyledTemperatureChart>
      </S.StyledWrapper>
    </BrowserRouter>
  );
};
