import * as React from "react";
import { View, FlatList, Text } from "react-native";
import { SearchBar } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";

import styles from "./style";
import SECTIONS from "../../utils/sections.json";
import SectionItem from "../../component/sectionItem";
import TopStoriesNavigationProp from "./types";
import { string } from "../../assets/strings";
import { StoriesListState } from "../sectionList/types";
import { setSection } from "../../redux/feature/storiesSlicer";
import { getFilteredSection } from "../../utils/filter";

export default function Section(props: {
  navigation: TopStoriesNavigationProp;
}) {
  const { navigation } = props;
  const [query, setQuery] = React.useState<string>("");
  const section = useSelector(
    (state: StoriesListState) => state.stories.section
  );
  const dispatch = useDispatch();

  const onQuery = (val: string) => {
    setQuery(val);
  };

  const navigateToSection = (section: string) => {
    navigation.navigate("topStories", {
      section,
    });
  };

  const onSectionSelected = (section: string) => {
    dispatch(setSection(section));
    navigateToSection(section);
  };

  React.useEffect(() => {
    if (section) {
      navigateToSection(section);
    }
  }, [section]);

  const renderSections = (props: { item: String }) => {
    const { item } = props;
    return <SectionItem item={item} onPress={onSectionSelected} />;
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder={string("searchBar.placeholder")}
        onChangeText={onQuery}
        value={query}
        lightTheme
        round
        containerStyle={{
          backgroundColor: "transparent",
          borderWidth: 0,
        }}
        platform="ios"
      />
      <FlatList
        data={getFilteredSection(query, SECTIONS)}
        renderItem={renderSections}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
