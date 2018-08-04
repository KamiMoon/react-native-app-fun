import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createStackNavigator } from "react-navigation";

// import Bannanas from "./src/Bananas";
// import LotsOfGreeting from "./src/LotsOfGreetings";
// import BlinkApp from "./src/BlinkApp";
// import LotsOfStyles from "./src/LotsOfStyles";
//import FixedDimensionsBasics from "./src/FixedDimensionsBasics";
//import FlexDimensionsBasics from "./src/FlexDimensionsBasics";
//import PizzaTranslator from "./src/PizzaTranslator";
//import ButtonBasics from "./src/ButtonBasics";
//import Touchables from "./src/Touchables";
//import IScrolledDownAndWhatHappenedNextShockedMe from "./src/IScrolledDownAndWhatHappenedNextShockedMe";
//import FlatListBasics from "./src/FlatListBasics";
//import SectionListBasics from "./src/SectionListBasics";
import FetchExample from "./src/FetchExample";
import HomeScreen from "./src/HomeScreen";

// export default class App extends React.Component {
//   render() {
//     // return (
//     //   <View style={styles.container}>
//     //     <Text>Open up App.js to start working on your app!</Text>
//     //     <Text>Changes you make will automatically reload.</Text>
//     //     <Text>Shake your phone to open the developer menu.</Text>
//     //     <Text>Hello World</Text>
//     //     <Bannanas />
//     //     <LotsOfGreeting />
//     //   </View>
//     // );
//     //return <BlinkApp />;
//     //return <LotsOfStyles />;
//     //return <FixedDimensionsBasics />;
//     //return <FlexDimensionsBasics />;
//     //return <PizzaTranslator />;
//     //return <Touchables />;
//     //return <IScrolledDownAndWhatHappenedNextShockedMe />;
//     //return <FlatListBasics />;
//     //return <SectionListBasics />;
//     //return <FetchExample />;
//   }
// }

const App = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: FetchExample }
  },
  {
    initialRouteName: "Home"
  }
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
