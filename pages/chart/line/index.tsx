import LineChart from '@d3/LineChart';

import type { NextPage } from 'next';

const data = [
  { value: 9, label: '서울' },
  { value: 10, label: '경기도' },
  { value: 12, label: '강원도' },
  { value: 10, label: '충청도' },
  { value: 9, label: '전라도' },
  { value: 7, label: '경상도' },
  { value: 6, label: '제주도' },
];

const Company: NextPage = () => {
  return (
    <div>
      <LineChart
        data={data}
        width={800}
        height={400}
        xData={(_, i: number) => i}
        yData={(d) => d.value}
        xTickFormat={(d) => data[d].label}
        styles={{
          color: 'blue',
          strokeWidth: 2,
        }}
      />
    </div>
  );
};

export default Company;
