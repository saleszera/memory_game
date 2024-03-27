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
    android: {
      package: 'com.memory.game',
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFF9EF',
      },
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
      sentryDsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
      eas: {
        projectId: 'ef4e5878-c63b-414c-8fe4-9ae7c7adc67c',
      },
    },
    updates: {
      url: 'https://u.expo.dev/ef4e5878-c63b-414c-8fe4-9ae7c7adc67c',
    },
    runtimeVersion: {
      policy: 'appVersion',
    },
  },
});
