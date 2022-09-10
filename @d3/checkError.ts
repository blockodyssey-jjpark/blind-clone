import { IChart as IPieChart } from './PieChart/type';

const checkError = (type: string, props: any) => {
  const pieRequiredProps: IPieChart = {
    data: props.data,
    width: props.width,
    height: props.height,
    barOptions: props.barOptions,
  };

  switch (type) {
    case 'pie':
      Object.values(pieRequiredProps).map((prop, i) => {
        if (!prop) throw new Error(`${Object.keys(pieRequiredProps)[i]} 값은 필수입니다.`);
        return null;
      });
      break;
    default:
      break;
  }
};

export default checkError;
