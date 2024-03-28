import React from 'react';

import * as Sentry from '@sentry/react-native';
import { withExpoSnack } from 'nativewind';

import { Game } from './src';

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  });
}

const App = (): JSX.Element => <Game />;

export default withExpoSnack(App);
