import React, { FunctionComponent } from "react";
import {
  TouchableOpacity,
  TextStyle,
  StyleProp,
  GestureResponderEvent,
} from "react-native";

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<TextStyle>;
};
const Clickable: FunctionComponent<Props> = (props) => {
  const { children, style = {}, ...rest } = props;
  return (
    <TouchableOpacity style={style} {...rest} activeOpacity={0.8}>
      {children}
    </TouchableOpacity>
  );
};
export default Clickable;
