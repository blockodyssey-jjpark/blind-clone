import * as d3 from 'd3';

function run() {
  const population2radius = d3
    .scaleSqrt() // instead of scaleLinear()
    .domain([0, 2e9])
    .range([0, 300]);

  console.log(population2radius(427e3));
}

const DonutChart = () => {
  run();

  return <div />;
};

export default DonutChart;
