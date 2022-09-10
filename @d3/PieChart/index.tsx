import React, { useEffect, useRef } from 'react';

import { createPie, createPieLabel, createSvg } from '@d3/utils';

import checkError from '../checkError';

import type { IChart } from './type';

const PieChart = (props: IChart) => {
  checkError('pie', props);

  const containerRef = useRef<HTMLDivElement>(null);
  const { data, width, height, barOptions } = props;

  useEffect(() => {
    const svg = createSvg({ containerRef, width, height, viewBox: [-width / 2, -height / 2, width, height] });

    createPie({
      svg,
      data,
      barOptions,
    });

    createPieLabel({
      svg,
      data,
      labelOptions: {
        innerRadius: barOptions.labelRadius ?? barOptions.innerRadius,
        outerRadius: barOptions.outerRadius,
      },
    });
  }, []);

  return <div ref={containerRef} />;
};

export default PieChart;
