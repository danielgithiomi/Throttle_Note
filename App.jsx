// import { StyleSheet, Text, View } from "react-native";

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text>App</Text>
//     </View>
//   );
// };

// let EntryPoint;

// if (!process.env.STORYBOOK_ENABLED) {
//   EntryPoint = require("./.rnstorybook");
// } else {
//   EntryPoint = App;
// }

// export default EntryPoint;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     height: "100%",
//     backgroundColor: "red",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

export { default } from "./.rnstorybook";
