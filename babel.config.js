module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { 
        jsxImportSource: 'nativewind',
        jsxRuntime: 'automatic'
      }]
    ],
    plugins: [
      ['nativewind/babel', { mode: 'transformOnly' }],
      ['module-resolver', {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './',
          '@/libs': './packages/libs',
        },
      }],
      'react-native-reanimated/plugin',
    ],
  };
};
