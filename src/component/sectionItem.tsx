import React from "react";
import { GestureResponderEvent, StyleSheet } from "react-native";
import { Card, Text } from "react-native-elements";

import { textColor, primary } from "../assets/colors";
import Clickable from "./clickable";

export default function SectionItem(props: {
  item: String;
  onPress: (arg: any) => void;
}) {
  const { item, onPress } = props;
  return (
    <Clickable onPress={() => onPress(item)} style={styles.button}>
      <Card containerStyle={styles.container}>
        <Text h4 style={styles.title} numberOfLines={1}>
          {item?.toLocaleUpperCase()}
        </Text>
      </Card>
    </Clickable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    backgroundColor: primary,
    borderWidth: 0,
  },
  title: {
    color: textColor,
  },
  button: {
    flex: 1,
    flexGrow: 1,
  },
});
