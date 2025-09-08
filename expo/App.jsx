import {useEffect} from "react";
import {useFonts} from "expo-font";
import Constants from "expo-constants";
import {StyleSheet, Text, View} from "react-native";

// Splash screen
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const App = () => {
    const minSplashScreen = Constants?.expoConfig?.extra?.minSplashScreenDuration ?? 2000;

    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    console.log("Min Splash Screen: ", minSplashScreen)

    useEffect(() => {
        if (loaded) {
            setTimeout(() => {
                SplashScreen.hideAsync();
            }, minSplashScreen);
        }
    }, [loaded, minSplashScreen])

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text>App</Text>
        </View>
    );
};

let EntryPoint;

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
