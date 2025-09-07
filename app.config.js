export default ({ config }) => ({
  ...config,
  name: "Throttle Note",
  slug: "throttle-note",
  version: "1.0.0",
  owner: "danielgithiomi",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "throttlenote",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  extra: {
    minSplashScreenDuration: 2000,
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    edgeToEdgeEnabled: true,
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
});
