module.exports = {
  presets: [
    [
      'module:@react-native/babel-preset',
      {
        jsxImportSource: 'nativewind',
      },
    ],
    'nativewind/babel',
  ],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: {
          '~': './src',
        },
      },
    ],
    "module:react-native-dotenv",
  ],
};
