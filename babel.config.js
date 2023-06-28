module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "nativewind/babel",
      require.resolve("expo-router/babel"),
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            // '@/components': './src/components',
            // '@/assets': './src/assets',
            // '@/theme': './src/theme',
            '@/app': './src/app',
            '@/styles': './src/styles',
            // '@/lib': './src/lib',
            // '@/services': './src/services',
            // '@/utils': './src/utils',
            // '@/contexts': './src/contexts',
            // '@/hooks': './src/hooks',
          },
        },
      ],
      "@babel/plugin-transform-export-namespace-from",
      'react-native-reanimated/plugin',
    ],
  };
};
