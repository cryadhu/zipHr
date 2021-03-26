import React from "react";
import { Image, StyleSheet } from "react-native";
import { Card, ListItem } from "react-native-elements";
import moment from "moment";
import { SectionItem } from "../api/types";

import { textColor, primary } from "../assets/colors";
import Clickable from "./clickable";

export default function SectionListItem(props: {
  item: SectionItem;
  onPress?: (arg: any) => void;
}) {
  const { item, onPress } = props;
  return (
    <Clickable onPress={() => onPress && onPress(item)} style={styles.button}>
      <Card containerStyle={styles.container}>
        <ListItem containerStyle={styles.item}>
          <Image
            source={{ uri: item.multimedia && item.multimedia[0]?.url }}
            style={styles.image}
          />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <ListItem.Subtitle>
              {moment(item.created_date).format("DD-MM-YYYY")}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </Card>
    </Clickable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary,
    borderWidth: 0,
    padding: 1,
  },
  title: {
    color: textColor,
  },
  button: {},
  item: {
    height: 120,
  },
  image: {
    width: 100,
    height: 100,
  },
});
