import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Section from "../screen/section";
import SectionList from "../screen/sectionList";

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="sections"
          component={Section}
          options={{ title: "Sections" }}
        />
        <Stack.Screen
          name="topStories"
          component={SectionList}
          options={{ title: "Top Stories" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
