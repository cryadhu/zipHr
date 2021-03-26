import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

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

type TopStoriesNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SectionList"
>;

export type SectionListProps = {
  route: SectionListRouteProp;
  navigation: TopStoriesNavigationProp;
};
