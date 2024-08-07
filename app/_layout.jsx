import React from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.otf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.otf'),
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.otf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.otf'),
  });

  if (!fontsLoaded) {
    // Optionally return a loading indicator while fonts are loading
    return null;
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
};

export default RootLayout;
