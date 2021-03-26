import * as React from "react";
import { View, FlatList, Text, ActivityIndicator } from "react-native";
import { SearchBar } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";

import styles from "./style";
import { getSections } from "../../redux/feature/storiesSlicer";
import { SectionListProps, StoriesListState } from "./types";
import { SectionItem } from "../../api/types";
import SectionListItem from "../../component/sectionListItem";
import { textColor } from "../../assets/colors";
import { string } from "../../assets/strings";

export default function SectionList({ route }: SectionListProps) {
  const stories = useSelector((state: StoriesListState) => state.stories);
  const [query, setQuery] = React.useState<string>("");

  const dispatch = useDispatch();
  const { section } = route.params;

  React.useEffect(() => {
    if (!isSectionExist()) {
      dispatch(getSections(section));
    }
  }, []);

  React.useEffect(() => {}, [stories.sectionList]);

  const onQuery = (val: string) => {
    setQuery(val);
  };

  const isSectionExist = () => {
    return stories.sectionList[section]?.length > 0;
  };

  const getFilteredData = (data: SectionItem[]) => {
    return data.filter((item: { title: string }) =>
      item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
  };

  const renderSections = (props: { item: SectionItem }) => {
    const { item } = props;
    return <SectionListItem item={item} />;
  };

  if (stories.loading) {
    return <ActivityIndicator color={textColor} size="large" />;
  }

  if (!isSectionExist()) {
    return null;
  }

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
        data={getFilteredData(stories.sectionList[section])}
        renderItem={renderSections}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
