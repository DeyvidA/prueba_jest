const { divider } = require("./example01");
const { mapData } = require("./example01");

test("This test should pass", () => {
  expect(divider(10, 2)).toBe(5);
});

test("Object assignment", () => {
  const data = { name: "John", age: 25 };
  expect(data).toEqual({ name: "John", age: 25 });
  expect(data).toStrictEqual({ name: "John", age: 25 });
});

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
  //   expect(n).toBeTruthy();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  //   expect(n).not.toBeNull();
});

test("logic number", () => {
  const value = 4;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(4);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4);
  expect(value).toBe(4);
  expect(value).toEqual(4);
  expect(value).not.toBe(5);
});

test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
});

test("mapData", () => {
  const data = [
    { name: "John", age: 25, id: 1 },
    { name: "Jane", age: 30, id: 2 },
    { siu: "El bicho", eero: 11, id: 3 },
  ];
  const newData = mapData(data);
  expect(newData).toEqual([
    { name: "John", age: 25, id: 1 },
    { name: "Jane", age: 30, id: 2 },
    { siu: "El bicho", eero: 11, id: 3 },
  ]);
});
