import { capitalize, reverse, newCalc, shift, analyzeArray } from "./sum";
test("capitalizing the first letter", () => {
  expect(capitalize("mahmoud")).toMatch(/^[A-Z]/);
});

test("checking if a string is reversed", () => {
  expect(reverse("mahmoud")).toMatch("duomham");
});

test("checking operations", () => {
  expect(newCalc.add(1, 2)).toEqual(3);
  expect(newCalc.subtract(1, 2)).toEqual(-1);
  expect(newCalc.divide(1, 2)).toEqual(0.5);
  expect(newCalc.multiply(1, 2)).toEqual(2);
});

test("check shifting", () => {
  expect(shift("mahmoud")).toBe("nbinpve");
});

test("check shifting", () => {
  expect(shift("MahmoudZ")).toBe("NbinpveA");
});

test("check shifting", () => {
  expect(shift("Mahmo udZ,!")).toBe("Nbinp veA,!");
});

test("check analyzetr", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
