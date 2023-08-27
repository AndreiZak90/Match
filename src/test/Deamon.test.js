import Deamon from "../js/Deamon";

test("тест валидности значений", () => {
  const mag = new Deamon("magik");
  expect(mag.type).toBe("magik");
  expect(mag.distance).toBe(false);
  expect(mag.power).toBe(100);
});
