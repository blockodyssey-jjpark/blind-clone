import * as d3 from 'd3';

import { IData } from './PieChart/type';

/**
 * getColor
 */
export function getColorSpectrum(colors: string[]) {
  const domain = Array.from({ length: colors.length }, (_, i) => {
    const r = 1 / (colors.length - 1);
    return i > 0 ? r * i : 0;
  });

  return d3.scaleLinear<string, string>().domain(domain).range(colors);
}

/**
 * createSvg
 */
type CreateSvgParams = {
  containerRef: React.RefObject<HTMLDivElement>;
  width: number;
  height: number;
  viewBox: [number, number, number, number];
};
export function createSvg({ containerRef, width, height, viewBox }: CreateSvgParams) {
  return d3
    .select(containerRef.current)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', viewBox);
}

/**
 * createPie
 */
type CreatePieParams = {
  svg: any;
  data: IData[];
  barOptions: {
    padAngle?: number;
    innerRadius?: number;
    outerRadius?: number;
    cornerRadius?: number;
    colors?: string[];
  };
};
export function createPie({
  svg,
  data,
  barOptions: {
    padAngle = 0,
    innerRadius = 50,
    outerRadius = innerRadius + 100,
    cornerRadius = 0,
    colors = ['black', 'white'],
  },
}: CreatePieParams) {
  // sort(null)을 호출해야 파이 차트가 시계방향으로 그려진다.
  const arcs = d3.pie().padAngle(padAngle).sort(null)(data.map((d) => d.value));
  const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius).cornerRadius(cornerRadius);

  const color = getColorSpectrum(colors);

  svg
    .append('g')
    .selectAll('path')
    .data(arcs)
    .join('path')
    .attr('fill', (_, i: number) => color(i / data.length))
    .attr('d', arc);
}

/**
 * createPie
 */
type CreatePieLabelParams = {
  svg: any;
  data: IData[];
  labelOptions: {
    innerRadius?: number;
    outerRadius?: number;
  };
};
export function createPieLabel({
  svg,
  data,
  labelOptions: { innerRadius = 50, outerRadius = innerRadius + 100 },
}: CreatePieLabelParams) {
  const labelRadius = (innerRadius + outerRadius) / 2;

  const arcs = d3.pie().sort(null)(data.map((d) => d.value));
  const arcLabel = d3.arc().innerRadius(labelRadius).outerRadius(labelRadius);

  svg
    .append('g')
    .attr('font-size', 10)
    .attr('text-anchor', 'middle')
    .selectAll('text')
    .data(arcs)
    .join('text')
    .attr('transform', (d: any) => `translate(${arcLabel.centroid(d)})`)
    .selectAll('tspan')
    .data((d: any) => {
      const lines = [`${data[d.index].label}`];
      lines.push(String(d.data));
      return d.endAngle - d.startAngle > 0.25 ? lines : lines.slice(0, 1);
    })
    .join('tspan')
    .attr('x', 0)
    .attr('y', (_, i) => {
      const lineHeight = 1.3;
      return `${-(lineHeight / 2) + lineHeight * i}em`;
    })
    .attr('font-weight', (_, i) => (i ? null : 'bold'))
    .text((d: any) => d);
}
