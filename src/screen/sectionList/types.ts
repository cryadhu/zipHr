import { RouteProp } from "@react-navigation/native";

import { SectionMappedItem } from "../../api/types";

export type StoriesListState = {
  stories: {
    sectionList: SectionMappedItem;
    loading: boolean;
  };
};

type RootStackParamList = {
  SectionList: { section: string };
};
type SectionListRouteProp = RouteProp<RootStackParamList, "SectionList">;

export type SectionListProps = {
  route: SectionListRouteProp;
};
