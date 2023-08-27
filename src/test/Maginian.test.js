import Magician from "../js/Magician";

test("тест валидности значений", () => {
  const mag = new Magician("magik");
  expect(mag.type).toBe("magik");
  expect(mag.distance).toBe(false);
  expect(mag.power).toBe(100);
});
