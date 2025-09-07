import Constants from "expo-constants";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  );
};

let EntryPoint;

console.log(
  "Storybook enabled value:",
  Constants.expoConfig.extra.storybookEnabled
);

if (Constants.expoConfig.extra.storybookEnabled) {
  EntryPoint = require("../.rnstorybook").default;
} else {
  EntryPoint = App;
}

export default EntryPoint;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});
