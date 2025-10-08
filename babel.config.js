// babel.config.js
module.exports = function configureBabel(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',   // wajib untuk proyek Expo
      'nativewind/babel',    // <-- INI preset, taruh di presets
    ],
    plugins: [
      'expo-router/babel',   // <-- ini memang plugin
      ['react-native-reanimated/plugin', { relativeSourceLocation: true }], // taruh terakhir
    ],
  };
};
