import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default class RecipeIngredients extends Component {

  render() {
    const { ingredientes } = this.props.screenProps;
    return (
      <View style={styles.areaTab}>
        <FlatList
          data={ingredientes}
          renderItem={({ item }) => <Text style={styles.ingredient}> - {item.txt}</Text>}
          keyExtractor={(item, _index) => item.txt}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  areaTab: {
    flex: 1,
    margin: 10,
  },
  ingredient: {
    fontSize: 16,
    marginBottom: 10,
  }
});