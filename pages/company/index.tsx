import BarChart from 'components/d3/BarChart';

import barChart from './data/barChart';

import type { NextPage } from 'next';

const Company: NextPage = () => {
  return (
    <div>
      <BarChart data={barChart.data} style={barChart.style} />
    </div>
  );
};

export default Company;
