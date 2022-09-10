import { PieChart } from '@d3';

import type { NextPage } from 'next';

const Company: NextPage = () => {
  return (
    <div>
      <PieChart
        data={[
          { value: 15, label: '1월' },
          { value: 13, label: '2월' },
          { value: 11, label: '3월' },
          { value: 10, label: '4월' },
          { value: 9, label: '5월' },
          { value: 7, label: '6월' },
          { value: 6, label: '7월' },
          { value: 5, label: '8월' },
        ]}
        width={500}
        height={500}
        barOptions={{
          outerRadius: 200,
          labelRadius: 70,
          colors: ['rgb(210,0,180)', 'rgb(255,235,255)'],
        }}
      />

      <PieChart
        data={[
          { value: 15, label: '1월' },
          { value: 13, label: '2월' },
          { value: 11, label: '3월' },
          { value: 10, label: '4월' },
          { value: 9, label: '5월' },
          { value: 7, label: '6월' },
          { value: 6, label: '7월' },
          { value: 5, label: '8월' },
        ]}
        width={500}
        height={500}
        barOptions={{
          innerRadius: 70,
          outerRadius: 200,
          colors: ['rgb(0,0,180)', 'rgb(235,255,255)'],
        }}
      />
    </div>
  );
};

export default Company;
