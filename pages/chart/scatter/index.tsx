import ScatterChart from '@d3/ScatterChart';
import data from '@d3/ScatterChart/data';

import type { NextPage } from 'next';

const Company: NextPage = () => {
  return (
    <div>
      <ScatterChart data={data} width={800} height={400} />
    </div>
  );
};

export default Company;
