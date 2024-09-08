import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const ScreensLayout = () => {
  return (
    <>
      <Stack>
      <Stack.Screen name="(transferfund)" options={{ headerShown: false }} />
      <Stack.Screen name="(exchange)" options={{ headerShown: false }} />
      <Stack.Screen name="(card)" options={{ headerShown: false }} />
        <Stack.Screen name="addfund" options={{ headerShown: false }} />
        <Stack.Screen name="transfer" options={{ headerShown: false }} />
        <Stack.Screen name="exchange" options={{ headerShown: false }} />
      </Stack>
      <StatusBar 
      className="bg-secondary"
      />
    </>
  );
};

export default ScreensLayout;
