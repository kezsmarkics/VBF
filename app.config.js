export default {
  expo: {
    name: "Vedomero",
    slug: "vedomero",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./képernyők/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./képernyők/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true
    },
    android: {
      package: "com.kezsmarkics.vedomero"
    },
    web: {
      favicon: "./képernyők/favicon.png"
    }
  }
};
