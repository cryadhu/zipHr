import { getFilteredSection, getFilteredSectionList } from "../utils/filter";
import sections from "../utils/sections.json";
import api from "../api";

it("should filter section properly", () => {
  const filteredSections = getFilteredSection("mo", sections);
  expect(filteredSections).toEqual(
    expect.arrayContaining(["movies", "automobiles"])
  );
});

it("should filter section list properly", async () => {
  const sectionList = await api.fetchSectionList("home");
  const filteredSectionList = getFilteredSectionList('tes', sectionList)
  filteredSectionList.every((sectionItem) => {
    sectionItem.multimedia.every((item) => {
      expect(item).toMatchObject({
        url: expect.any(String),
      });
    });
    expect(sectionItem).toMatchObject({
      abstract: expect.any(String),
      byline: expect.any(String),
      created_date: expect.anything(),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
