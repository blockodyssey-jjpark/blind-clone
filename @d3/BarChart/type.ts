interface IData {
  label: string;
  value: number;
}
interface IStyle {
  canvas: {
    width: number;
    height: number;
    marginTop: number;
    marginBottom: number;
    marginLeft: number;
    marginRight: number;
  };
  bar: {
    gap: number;
    fill: string;
    radius: number;
    filter: string;
  };
}

export type IChart = {
  data: IData[];
  style: IStyle;
};
