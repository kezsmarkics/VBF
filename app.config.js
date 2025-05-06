export default {
  cli: { appVersionSource: "node" },
  extra: { eas: { projectId: "your-project-id-here" } },
  expo: {
    name: "Vedomero",
    slug: "vedomero",
    version: "1.0.0",
    orientation: "portrait",
    userInterfaceStyle: "light",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
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
      package: "com.kezsmarkics.vedomero",
      versionCode: 1
    },
    web: {
      favicon: "./assets/favicon.png"
    }
  }
};
