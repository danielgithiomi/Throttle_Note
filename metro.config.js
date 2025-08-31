// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

console.log("Process enabled as", process.env.EXPO_PUBLIC_STORYBOOK);

if (process.env.EXPO_PUBLIC_STORYBOOK)
  config.resolver.resolverMainFields.unshift("sbmodern");

module.exports = config;
