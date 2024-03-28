const projectId = process.env.EXPO_PUBLIC_PROJECT_ID;

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
      package: 'com.saleszera.memrygame',
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFF9EF',
      },
    },
    plugins: [
      [
        '@sentry/react-native/expo',
        {
          organization: process.env.EXPO_PUBLIC_SENTRY_ORGANIZATION,
          project: process.env.EXPO_PUBLIC_SENTRY_PROJECT,
          authToken: process.env.EXPO_PUBLIC_SENTRY_AUTH_TOKEN,
        },
      ],
    ],
    extra: {
      sentryDsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
      eas: {
        projectId,
      },
    },
    updates: {
      url: `https://u.expo.dev/${projectId}`,
    },
    runtimeVersion: {
      policy: 'appVersion',
    },
  },
});
