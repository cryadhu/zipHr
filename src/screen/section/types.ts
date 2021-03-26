import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  topStories: { section: String };
};

type TopStoriesNavigationProp = StackNavigationProp<
  RootStackParamList,
  "topStories"
>;

export default TopStoriesNavigationProp;
