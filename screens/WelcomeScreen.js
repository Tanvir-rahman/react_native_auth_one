import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WelcomeScreen() {
  return (
    <SafeAreaView edges={['top']}>
      <Text>Welcome Screen</Text>
    </SafeAreaView>
  );
}
