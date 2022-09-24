const caclAverageGap = (values: number[]) => {
  const gaps = values.flatMap((v, i, a) => {
    return a[i + 1] ? Math.abs(v - a[i + 1]) : [];
  });

  const sum = gaps.reduce((prev, curr) => {
    return prev + curr;
  });

  return Math.floor(sum / gaps.length);
};

export default caclAverageGap;
