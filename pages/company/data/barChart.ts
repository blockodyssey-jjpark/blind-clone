import { Chart } from 'components/d3/type';

const data = [
  { label: '1월', value: 638789 },
  { label: '2월', value: 99926 },
  { label: '3월', value: 397185 },
  { label: '4월', value: 912735 },
  { label: '5월', value: 170341 },
];

const style = {
  canvas: {
    width: 600,
    height: 300,
    marginTop: 0,
    marginBottom: 20,
    marginLeft: 0,
    marginRight: 0,
  },
  bar: {
    gap: 20,
    fill: '#4AC0FB',
    radius: 4,
    filter: 'drop-shadow(0px 2px 6px #4AC0FB80)',
  },
};

const barChart: Chart = {
  data,
  style,
};

export default barChart;
