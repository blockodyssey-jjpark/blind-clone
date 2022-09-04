import * as d3 from 'd3';
import { useCallback, useEffect } from 'react';

interface IData {
  label: string;
  value: number;
}

interface IStyle {
  fill?: string;
  radius?: number;
  filter?: string;
}

interface IProps {
  width: number;
  height: number;
  data: IData[];
  style: IStyle;
  gap?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  marginTop?: number;
}

const BarChart = ({
  width,
  height,
  data,
  style,
  gap = 0,
  marginLeft = 10,
  marginRight = 10,
  marginBottom = 20,
  marginTop = 0,
}: IProps) => {
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
          return yScale(0) - yScale(d.value);
        })
        .attr('x', getX)
        .attr('y', (d: any) => {
          return yScale(d.value);
        })
        .attr('fill', style.fill ?? 'transparent')
        .attr('rx', style.radius ?? 0)
        .attr('filter', style.filter ?? '');
    },
    [getWidth, getX, style.fill, style.filter, style.radius, yScale],
  );

  useEffect(() => {
    const svg = d3
      .select('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height])
      .selectAll('g')
      .data(data)
      .enter();

    const groups = svg.append('g');
    groups.append('rect').call(drawBar);
  }, [data, drawBar, height, width]);

  return (
    <div>
      <svg />
    </div>
  );
};

export default BarChart;
