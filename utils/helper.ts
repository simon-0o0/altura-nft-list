export const rangeFormatter = (num: number, digits: number): string => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find((item) => {
      return num >= item.value;
    });

  return item
    ? (
        Math.trunc((num / item.value) * Math.pow(10, digits)) /
        Math.pow(10, digits)
      )
        .toString()
        .replace(rx, "$1") + item.symbol
    : "0";
};
