import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';

import { createSvg, calcAverageGap } from '@d3/utils/common';

import type { IChart } from './type';

// TODO: 레이블의 너비, 높이와 그래프에 대한 padding 구분하여 크기 계산
const LineChart = (props: IChart) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data, width, height, padding, xData, yData, xTickFormat, yTickFormat, styles } = props;

  const p = padding || 20;
  const w = width - p * 2;
  const h = height - p * 2;

  useEffect(() => {
    const svg = createSvg({ containerRef, width, height, viewBox: [p, p, w, h] });

    const X = d3.map(data, xData);
    const Y = d3.map(data, yData);

    const extra = calcAverageGap(Y);

    const xDomain = [d3.min(X) || 0, d3.max(X) || 0]; // [xmin, xmax]
    const yDomain = [(d3.min(Y) || 0) - extra, (d3.max(Y) || 0) + extra]; // [ymin, ymax]

    const xRange = [p, w - p * 2]; // [left, right]
    const yRange = [h - p, p]; // [bottom, top]

    const xScale = d3.scaleLinear().domain(xDomain).nice().range(xRange);
    const yScale = d3.scaleLinear().domain(yDomain).nice().range(yRange);

    // 축 그리기
    const xAxis = d3.axisBottom(xScale).ticks(data.length).tickFormat(xTickFormat);
    svg
      .append('g')
      .call(xAxis)
      .attr('transform', `translate(${p * 2}, ${h})`)
      .call((g) => g.select('.domain').attr('stroke', '#eeeeee'))
      .call((g) => g.selectAll('.tick').attr('stroke-opacity', 0.1));

    const yAxis = d3.axisLeft(yScale).tickFormat(yTickFormat);
    svg
      .append('g')
      .attr('transform', `translate(${p * 2}, 0)`)
      .call(yAxis)
      .call((g) => g.select('.domain').remove())
      .call((g) =>
        g
          .selectAll('.tick line')
          .clone()
          .attr('x2', w - p)
          .attr('stroke-opacity', 0.1),
      );

    const line = d3
      .line()
      .x((_, i) => xScale(X[i]))
      .y((_, i) => yScale(Y[i]));

    svg
      .append('path')
      .attr('fill', 'none')
      .attr('transform', `translate(${p * 2}, 0)`)
      .attr('stroke', styles.color)
      .attr('stroke-width', styles.strokeWidth || 1)
      .attr('stroke-linejoin', styles.strokeLinejoin || 'miter')
      .attr('stroke-linecap', styles.strokeLinecap || 'butt')
      .attr('d', line(data));
  }, []);

  return <div ref={containerRef} />;
};

export default LineChart;
