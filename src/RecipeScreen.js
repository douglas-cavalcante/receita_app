import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";

import RecipeIngredients from './RecipeIngredients';
import RecipeMethod from './RecipeMethod';
import RecipeResume from './RecipeResume';

const Tabs = createMaterialTopTabNavigator({
  RecipeResume: {
    screen: RecipeResume,
    navigationOptions: {
      title: "Resumo"
    }
  },
  RecipeIngredients: {
    screen: RecipeIngredients,
    navigationOptions: {
      title: "Ingredientes"
    },
  },
  RecipeMethod: {
    screen: RecipeMethod,
    navigationOptions: {
      title: "Preparo"
    }
  },

}, {
    tabBarOptions: {
      showIcon: false,
      style: {
        backgroundColor: '#EEEEEE'
      },
      labelStyle: {
        fontSize: 10,
        height: 47,
        lineHeight: 47
      },
      activeTintColor: '#333333',
      inactiveTintColor: '#CCCCCC'
    }
  });

const AppContainer = createAppContainer(Tabs);


export default class RecipeScreen extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  goBack = () => () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.backButton} underlayColor="#CCCCCC" onPress={this.goBack()} >
          <Image style={styles.backImg} source={require("../assets/images/back.png")} />
        </TouchableHighlight>
        <Image style={styles.recipeImg} source={{ uri: this.props.navigation.state.params.imagem }} />
        <AppContainer screenProps={this.props.navigation.state.params} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#CCCCCC"
  },
  backButton: {
    width: 26,
    height: 26,
    marginLeft: 10,
    marginTop: 5,
    zIndex: 99,
  },
  backImg: {
    width: 26,
    height: 26,
  },
  recipeImg: {
    height: 200,
    marginTop: -51
  },

});





