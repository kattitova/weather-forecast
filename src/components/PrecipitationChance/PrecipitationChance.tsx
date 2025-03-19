import { useEffect, useRef } from 'react';
import Plotly from 'plotly.js-dist';
import * as S from './styled';
import { usePrecipitationChartData } from '../../hooks';
import { PHRASES } from '../../constants/phrases';

export const PrecipitationChance = () => {
  const todayRef = useRef<HTMLDivElement>(null);
  const data = usePrecipitationChartData();

  useEffect(() => {
    if (!data) return;
    const { trace, layout, config } = data;

    if (todayRef.current)
      Plotly.newPlot(todayRef.current, trace, layout, config);
  }, [data]);

  return (
    <S.StyledWrapper>
      <h3>{PHRASES.CHANCE_OF_PRECIPITATION}</h3>
      <div ref={todayRef}></div>
    </S.StyledWrapper>
  );
};
