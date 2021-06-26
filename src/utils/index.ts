export type Data = object[] | object | number;
export const getDataType = (data: Data) => {
  return typeof data === "number"
    ? "number"
    : Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
};

export const isEmptyArrayOrObject = (data: Data) => {
  // 空数组或者空对象
  return [{}, []]
    .map((item) => JSON.stringify(item))
    .includes(JSON.stringify(data));
};

export const formatValue = (data: Data) => {
  if (typeof data === "number") {
    return data.toString(10);
  }
  return data;
};

export const isObjectOrArray = (source: Data) => {
  return ["array", "object"].includes(getDataType(source));
};
