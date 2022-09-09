import { BarChart } from '@d3';
import barChart from 'data/barChart';

import type { NextPage } from 'next';

const Company: NextPage = () => {
  return (
    <div>
      <BarChart data={barChart.data} style={barChart.style} />
    </div>
  );
};

export default Company;
