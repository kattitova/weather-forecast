import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as S from './styled';
import { TemperatureChart } from '../TemperatureChart';

export const TemperatureChartWrapper = () => {
  return (
    <BrowserRouter>
      <S.StyledWrapper>
        <h3>Temperature Chart</h3>
        <S.StyledTemperatureChart>
          <nav>
            <S.StyledLink to='/' end>
              Today
            </S.StyledLink>
            <S.StyledLink to='/week-temperature'>Week</S.StyledLink>
          </nav>
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
