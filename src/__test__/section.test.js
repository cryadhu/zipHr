import sections from "../utils/sections.json";

test("should contain list of strings(sections)", () => {
  expect(sections).toMatchSnapshot();
});
