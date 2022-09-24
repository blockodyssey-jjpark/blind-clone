interface IData {
  value: number;
  label: string;
}

interface IChart {
  data: IData[];
  width: number;
  height: number;
  padding?: number;
  xData: (d: IData, i: number) => number;
  yData: (d: IData, i: number) => number;
  xTickFormat?: (d: number, i: number) => string;
  yTickFormat?: (d: number, i: number) => string;
  styles: {
    color: string;
    strokeWidth?: number;
    strokeLinejoin?: 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round';
    strokeLinecap?: 'butt' | 'round' | 'square';
  };
}

export type { IData, IChart };
