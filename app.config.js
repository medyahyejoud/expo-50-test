module.exports = {
  expo: {
    name: "expo-50-test",
    slug: "exop-50-test",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.medyahyejoud.expo50test",
      config: {
        googleMapsApiKey: process.env.EXPO_GOOGLE_MAP_API_KEY_IOS,
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.medyahyejoud.expo50test",
      config: {
        googleMaps: {
          apiKey: process.env.EXPO_GOOGLE_MAP_API_KEY_ANDROID,
        },
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "09bceb6c-3a84-4de4-9cb9-0f79277c68be",
      },
    },
    plugins: [
      "./bin/react-native-maps-plugin",
      "./bin/react-apple-ios-simulator-not-found-plugin",
    ],
    owner: "medyahyejoud",
  },
};
