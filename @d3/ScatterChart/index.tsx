import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';

import { createSvg } from '@d3/utils/common';

import type { IChart } from './type';

// TODO: 레이블의 너비, 높이와 그래프에 대한 padding 구분하여 크기 계산
const ScatterChart = (props: IChart) => {
  // const containerRef = useRef<HTMLDivElement>(null);
  // const { data, width, height } = props;

  // const label = { x: 'Sepal length (cm) →', y: '↑ Sepal width (cm)' }; // x, y 축에 표시할 레이블

  // const margin = { top: 25, right: 20, bottom: 35, left: 40 };

  // const xDomain: [number, number] = d3.extent(data, (d) => d.x);
  // const yDomain: [number, number] = d3.extent(data, (d) => d.y);

  // const x = d3
  //   .scaleLinear()
  //   .domain(xDomain)
  //   .nice()
  //   .range([margin.left, width - margin.right]);

  // const y = d3
  //   .scaleLinear()
  //   .domain(yDomain)
  //   .nice()
  //   .range([height - margin.bottom, margin.top]);

  // const color = d3.scaleOrdinal(
  //   data.map((d) => d.category),
  //   d3.schemeCategory10,
  // );

  // const shape = d3.scaleOrdinal(
  //   data.map((d) => d.category),
  //   d3.symbols.map((s) => d3.symbol().type(s)()),
  // );

  // const xAxis = (g: any) =>
  //   g
  //     .attr('transform', `translate(0,${height - margin.bottom})`)
  //     .call(d3.axisBottom(x).ticks(width / 80))
  //     .call((g) => g.select('.domain').remove())
  //     .call((g) =>
  //       g
  //         .append('text')
  //         .attr('x', width)
  //         .attr('y', margin.bottom + 100)
  //         .attr('fill', 'currentColor')
  //         .attr('text-anchor', 'end')
  //         .text(label.x),
  //     );

  // const yAxis: any = (g) =>
  //   g
  //     .attr('transform', `translate(${margin.left},0)`)
  //     .call(d3.axisLeft(y))
  //     .call((g) => g.select('.domain').remove())
  //     .call((g) =>
  //       g
  //         .append('text')
  //         .attr('x', -margin.left)
  //         .attr('y', 10)
  //         .attr('fill', 'currentColor')
  //         .attr('text-anchor', 'start')
  //         .text(label.y),
  //     );

  // const grid = (g) =>
  //   g
  //     .attr('stroke', 'currentColor')
  //     .attr('stroke-opacity', 0.1)
  //     .call((g) =>
  //       g
  //         .append('g')
  //         .selectAll('line')
  //         .data([
  //           1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75, 4, 4.25, 4.5, 4.75, 5, 5.25, 5.5, 5.75, 6, 6.25,
  //           6.5, 6.75, 7, 7.25, 7.5, 7.75, 8,
  //         ])
  //         .join('line')
  //         .attr('x1', (d) => 0.5 + x(d))
  //         .attr('x2', (d) => 0.5 + x(d))
  //         .attr('y1', margin.top)
  //         .attr('y2', height - margin.bottom),
  //     )
  //     .call((g) =>
  //       g
  //         .append('g')
  //         .selectAll('line')
  //         .data(y.ticks())
  //         .join('line')
  //         .attr('y1', (d) => 0.5 + y(d))
  //         .attr('y2', (d) => 0.5 + y(d))
  //         .attr('x1', margin.left)
  //         .attr('x2', width - margin.right),
  //     );

  // useEffect(() => {
  //   const svg = createSvg({ containerRef, width, height, viewBox: [0, 0, width, height] });

  //   svg.append('g').call(xAxis);
  //   svg.append('g').call(yAxis);
  //   svg.append('g').call(grid);

  //   svg
  //     .append('g')
  //     .selectAll('path')
  //     .data(data)
  //     .join('path')
  //     .attr('transform', (d) => `translate(${x(d.x)},${y(d.y)})`)
  //     .attr('fill', (d) => color(d.category))
  //     .attr('d', (d) => shape(d.category));
  // }, []);

  return <div ref={containerRef} />;
};

export default ScatterChart;
