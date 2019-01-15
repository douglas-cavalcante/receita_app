import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class RecipeResume extends Component {

  render() {
    const { nome, por, descricao } = this.props.screenProps;
    return (
      <View style={styles.areaTab}>
        <Text style={styles.name}>{nome}</Text>
        <Text style={styles.by}>{por}</Text>
        <Text>{descricao}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  areaTab: {
    flex: 1,
    margin: 10,
  },
  name: {
    fontSize: 16,
    marginBottom: 10
  },
  by: {
    marginBottom: 10,
    color: "orange"
  },
});