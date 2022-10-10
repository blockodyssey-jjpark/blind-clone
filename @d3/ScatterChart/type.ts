interface IData {
  category: string;
  x: number;
  y: number;
}

interface IChart {
  data: IData[];
  width: number;
  height: number;
}

export type { IData, IChart };
