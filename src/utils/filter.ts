import { SectionItem } from "../api/types";

export const getFilteredSectionList = (query: string, data: [SectionItem]) => {
  return data?.filter((item: SectionItem) =>
    item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );
};

export const getFilteredSection = (query: string, data: string[]) => {
  return data.filter((item: string) =>
    item.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );
};
