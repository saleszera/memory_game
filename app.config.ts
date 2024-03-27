export default (): Record<string, unknown> => ({
  expo: {
    name: 'memry-game',
    slug: 'memry-game',
    version: '1.0.0',
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    entryPoint: process.env.STORYBOOK_ENABLED
      ? 'index.storybook.js'
      : 'node_modules/expo/AppEntry.js',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#FFF9EF',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFF9EF',
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
    plugins: [
      [
        '@sentry/react-native/expo',
        {
          organization: 'study-y2',
          project: 'memory-game',
        },
      ],
    ],
    extra: {
      sentryDsn: process.env.SENTRY_DSN,
    },
  },
});
