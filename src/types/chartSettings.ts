export const temperatureChartSettings = (
  xData: string[] | number[],
  yData: string[] | number[],
  chartColor: string,
  fillChart: string,
  chartName: string
) => ({
  x: xData,
  y: yData,
  name: chartName,
  mode: 'lines+markers',
  fill: fillChart,
  fillcolor: chartColor.replace('rgb', 'rgba').replace(')', ',0.5)'),
  line: {
    color: chartColor,
  },
  marker: {
    color: '#fff',
    size: 5,
    line: {
      color: chartColor,
      width: 1,
    },
  },
});

export const temperatureLayoutSettings = (legend: boolean, title: string) => ({
  margin: {
    l: 50,
    r: 10,
    b: 50,
    t: 20,
  },
  xaxis: {
    title: {
      text: title,
      font: {
        family: 'Helvetica, Arial, sans-serif',
        size: 12,
      },
    },
    dtick: 2,
  },
  yaxis: {
    title: {
      text: 'Temperature (°C)',
      font: {
        family: 'Helvetica, Arial, sans-serif',
        size: 12,
      },
    },
  },
  height: 200,
  showlegend: legend,
  legend: {
    orientation: 'h',
    x: 0.5,
    xanchor: 'center',
    y: 1.1,
    yanchor: 'bottom',
  },
});
