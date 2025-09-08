export default ({config}) => ({
    ...config,
    name: "Throttle Note",
    slug: "throttle-note",
    version: "1.0.0",
    owner: "danielgithiomi",
    orientation: "portrait",
    icon: "./assets/icons/adaptive-icon.png",
    scheme: "throttlenote",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    extra: {
        minSplashScreenDuration: 2000,
        storybookEnabled: process.env.STORYBOOK_ENABLED === "true",
    },
    ios: {
        supportsTablet: true,
        bundleIdentifier: "com.throttlenote.ios",
        config: {
            usesNonExemptEncryption: false,
        },
        icon: "./assets/icons/ios-light.png",
    },
    android: {
        package: "com.throttlenote.android",
        adaptiveIcon: {
            foregroundImage: "./assets/icons/adaptive-icon.png",
            monochromeImage: "./assets/icons/adaptive-icon.png",
            backgroundColor: "#009cbc",
        },
        edgeToEdgeEnabled: true,
    },
    web: {
        bundler: "metro",
        output: "static",
        favicon: "./assets/icons/adaptive-icon.png",
    },
    plugins: [
        "expo-router",
        [
            "expo-splash-screen",
            {
                backgroundColor: "#009cbc",
                image: "./assets/icons/splash-icon-light.png",
                dark: {
                    image: "./assets/icons/splash-icon-dark.png",
                    backgroundColor: "#009cbc",
                },
                resizeMode: "contain",
                imageWidth: 200,
            },
        ],
    ],
    experiments: {
        typedRoutes: true,
    },
});
