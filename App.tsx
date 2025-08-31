import { useEffect } from "react";
import { useFonts } from "expo-font";
import RootLayout from "./app/_layout";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ThemeProvider } from "@react-navigation/native";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

function App() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    SpaceMono: require("./assets/fonts/SpaceMono-Regular.ttf"),
  });

  console.log("App.tsx storybook enabled:", Constants.expoConfig?.extra?.storybookEnabled);

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <RootLayout />
    </ThemeProvider>
  );
}

let EntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
  EntryPoint = require("./.rnstorybook").default;
}

export default EntryPoint;
