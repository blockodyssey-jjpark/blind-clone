interface IData {
  value: number;
  label: string;
}

interface IChart {
  data: IData[];
  width: number;
  height: number;
  barOptions: {
    padAngle?: number;
    innerRadius?: number;
    outerRadius?: number;
    labelRadius?: number;
    cornerRadius?: number;
    colors?: string[];
  };
}

export type { IData, IChart };
