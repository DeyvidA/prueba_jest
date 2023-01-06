function divider(a, b) {
  return a / b;
}

function mapData(data) {
  return data.map((item) => {
    const newData = ["name", "age", "id"].reduce((acc, key) => {
      acc[key] = item[key];
      return acc;
    }, {});
    return newData;
  });
}

module.exports = { divider, mapData };
