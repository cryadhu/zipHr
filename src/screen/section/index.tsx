import * as React from "react";
import { View, FlatList, Text } from "react-native";
import { SearchBar } from "react-native-elements";

import styles from "./style";
import SECTIONS from "../../utils/sections.json";
import SectionItem from "../../component/sectionItem";
import TopStoriesNavigationProp from "./types";
import { string } from "../../assets/strings";

export default function Section(props: {
  navigation: TopStoriesNavigationProp;
}) {
  const { navigation } = props;
  const [query, setQuery] = React.useState<String>("");

  const onQuery = (val: string) => {
    setQuery(val);
  };

  const onSectionSelected = (section: String) => {
    navigation.navigate("topStories", {
      section,
    });
  };

  const renderSections = (props: { item: String }) => {
    const { item } = props;
    return <SectionItem item={item} onPress={onSectionSelected} />;
  };

  const data = SECTIONS.filter((item) =>
    item.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );
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
        data={data}
        renderItem={renderSections}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
