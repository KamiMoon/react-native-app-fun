import React, { Component } from "react";
import { AppRegistry, View } from "react-native";

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      // <View style={{ flex: 1}}>
      //   <View style={{ flex: 1, backgroundColor: "powderblue" }} />
      //   <View style={{ flex: 2, backgroundColor: "skyblue" }} />
      //   <View style={{ flex: 3, backgroundColor: "steelblue" }} />
      // </View>

      //Try setting `flexDirection` to `column`.
      // <View style={{ flex: 1, flexDirection: "row" }}>
      //   <View
      //     style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
      //   />
      //   <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
      //   <View style={{ width: 50, height: 50, backgroundColor: "steelblue" }} />
      // </View>

      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      // <View
      //   style={{
      //     flex: 1,
      //     flexDirection: "column",
      //     //flexDirection: "row",
      //     justifyContent: "space-between"
      //     //justifyContent: "center"
      //   }}
      // >
      //   <View
      //     style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
      //   />
      //   <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
      //   <View style={{ width: 50, height: 50, backgroundColor: "steelblue" }} />
      // </View>

      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          //flexDirection: "row",
          justifyContent: "center",
          //justifyContent: "flex-end",
          alignItems: "center"
          //alignItems: "flex-start"
        }}
      >
        <View
          style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
        />
        <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "steelblue" }} />
      </View>
    );
  }
}

// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);
