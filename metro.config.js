/* eslint-disable @typescript-eslint/no-var-requires */
// Learn more https://docs.expo.io/guides/customizing-metro
const { getSentryExpoConfig } = require('@sentry/react-native/metro');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

// generate({
//   configPath: path.resolve(__dirname, './.storybook'),
// });

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const sentryConfig = getSentryExpoConfig(__dirname);

config.transformer.unstable_allowRequireContext = true;

config.resolver.sourceExts.push('mjs');

config.resolver.resolveRequest = (context, moduleName, platform) => {
  const defaultResolveResult = context.resolveRequest(
    context,
    moduleName,
    platform,
  );

  if (
    process.env.STORYBOOK_ENABLED !== 'true' &&
    Boolean(defaultResolveResult?.filePath?.includes?.('.storybook/'))
  ) {
    return {
      type: 'empty',
    };
  }

  return defaultResolveResult;
};

module.exports = withNativeWind(
  { ...config, ...sentryConfig },
  { input: './global.css' },
);
