import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ListScreen from "./src/ListScreen";
import RecipeScreen from "./src/RecipeScreen";

const Nav = createStackNavigator({
  List: {
    screen: ListScreen,
  },
  Recipe: {
    screen: RecipeScreen,
  },
});

const AppContainer = createAppContainer(Nav);
export default AppContainer;