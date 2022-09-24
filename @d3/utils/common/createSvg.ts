import * as d3 from 'd3';

/**
 * createSvg
 */
type CreateSvgParams = {
  containerRef: React.RefObject<HTMLDivElement>;
  width: number;
  height: number;
  viewBox: [number, number, number, number];
};
function createSvg({ containerRef, width, height, viewBox }: CreateSvgParams) {
  return d3
    .select(containerRef.current)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', viewBox);
}

export default createSvg;
