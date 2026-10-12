module.exports = function (apiJfg) {
  apiJfg.cache(true);
  return {
    presets: ["babel-preset-expo"],
  };
};
