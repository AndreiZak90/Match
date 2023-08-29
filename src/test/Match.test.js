import Main from "../js/Match";

test("test 'stoned'", () => {
  const main = new Main("magik");
  expect((main.stoned = 100)).toBe(100);
});

test("test 'stoned'", () => {
  const main = new Main("magik");
  expect(main.stoned).toBe(false);
});

test("test 'stoned'", () => {
  const main = new Main("magik");
  main.attackedValue = 90;
  main.distance = 2;
  main.stoneStatus = true;
  const result =
    main.attackedValue * (1 - (main.distance - 1) / 10) -
    Math.log2(main.distance) * 5;
  expect(main.attack).toBe(result);
});

test("test 'stoned'", () => {
  const main = new Main("magik");
  main.attackedValue = 90;
  main.distance = 3;
  main.stoneStatus = false;
  const result = main.attackedValue * (1 - (main.distance - 1) / 10);
  expect(main.attack).toBe(result);
});

test("test 'stoned'", () => {
  const main = new Main("magik");
  expect((main.attack = 5)).toBe(main.attackedValue);
});
