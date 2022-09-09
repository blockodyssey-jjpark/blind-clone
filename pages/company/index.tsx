import { BarChart, DonutChart } from '@d3';

import barChart from './data/barChart';

import type { NextPage } from 'next';

const Company: NextPage = () => {
  return (
    <div>
      <BarChart data={barChart.data} style={barChart.style} />
      <DonutChart />
    </div>
  );
};

export default Company;
