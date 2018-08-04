import React, { Component } from "react";
import { View } from "react-native";

import Blink from "./Blink";

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text="I love to blink" />
        <Blink text="Yes blinking is so great" />
        <Blink text="Why did they ever take this out of HTML" />
        <Blink text="Look at me look at me look at me" />
      </View>
    );
  }
}

// skip this line if using Create React Native App
//AppRegistry.registerComponent("AwesomeProject", () => BlinkApp);
