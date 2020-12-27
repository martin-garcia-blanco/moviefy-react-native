module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: ['inline-dotenv', 'transform-es2015-modules-commonjs'],
  };
};
