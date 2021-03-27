import api from "../api";

it("calls sections list should returns list of sections", async () => {
  const sectionList = await api.fetchSectionList("home");
  sectionList.every((sectionItem) => {
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
