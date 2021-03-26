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

export default function SectionList({ route }: SectionListProps) {
  const stories = useSelector((state: StoriesListState) => state.stories);
  const dispatch = useDispatch();
  const { section } = route.params;
  
  React.useEffect(() => {
    if (!isSectionExist()) {
      dispatch(getSections(section));
    }
  }, []);

  React.useEffect(() => {}, [stories.sectionList]);

  const isSectionExist = () => {
    return stories.sectionList[section]?.length > 0;
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
      <FlatList
        data={stories.sectionList[section]}
        renderItem={renderSections}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
