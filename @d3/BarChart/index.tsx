import * as d3 from 'd3';
import { useCallback, useEffect } from 'react';

import { IChart } from './type';

const BarChart = ({
  data,
  style: {
    canvas: { width, height, marginTop, marginBottom, marginLeft, marginRight },
    bar: { gap, fill, filter, radius },
  },
}: IChart) => {
  const maxSumValue = d3.max(data.map((d) => d.value)) ?? 0;

  const yDomain = [0, maxSumValue]; // [ymin, ymax]
  const yRange = [height - marginBottom, marginTop]; // [bottom, top]

  const getWidth = (width - marginLeft - marginRight) / data.length - gap;
  const yScale = d3.scaleLinear(yDomain, yRange);

  const getX = useCallback((_: any, i: number) => (getWidth + gap) * i + (gap + marginLeft + marginRight) / 2, []);

  const drawBar = useCallback(
    (selection: any) => {
      selection
        .attr('width', getWidth)
        .attr('height', (d: any) => {
          return yScale(0) - yScale(d.value) - 4;
        })
        .attr('x', getX)
        .attr('y', (d: any) => {
          return yScale(d.value);
        })
        .attr('fill', fill ?? 'transparent')
        .attr('rx', radius ?? 0)
        .attr('filter', filter ?? '');
    },
    [fill, filter, getWidth, getX, radius, yScale],
  );

  const xDomain = new d3.InternSet(d3.map(data, (d) => d.label));
  const xRange = [marginLeft, width - marginRight];

  const xScale = d3.scaleBand(xDomain, xRange).padding(0);
  const xAxis = d3.axisBottom(xScale);

  useEffect(() => {
    const svg = d3.select('svg').attr('width', width).attr('height', height).attr('viewBox', [0, 0, width, height]);

    svg.selectAll('_bar').data(data).enter().append('g').append('rect').call(drawBar);

    const axis = svg.append('g').call(xAxis);
    axis
      .attr('color', '#545454')
      .attr('font-size', '12')
      .attr('font-weight', '400')
      .attr('transform', `translate(0,${height - marginBottom})`);
    axis.selectAll('path, line').attr('stroke', 'transparent');
  }, [data, drawBar, height, marginBottom, width, xAxis]);

  return (
    <div>
      <svg />
    </div>
  );
};

export default BarChart;
