import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default class RecipeMethod extends Component {

  render() {
    const { modo } = this.props.screenProps;
    return (
      <View style={styles.areaTab}>
        <FlatList
          data={modo}
          renderItem={({ item }) => <Text style={styles.method}> Passo {item.key}: {item.txt}</Text>}
          keyExtractor={(item, index) => item.txt}
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
  method: {
    fontSize: 16,
    marginBottom: 10,
  }
});