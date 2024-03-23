import 'dotenv/config';

export default (): Record<string, unknown> => ({
  expo: {
    name: 'memry-game',
    slug: 'memry-game',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
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
