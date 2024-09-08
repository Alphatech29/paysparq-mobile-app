import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const CardLayout = () => {
  return (
    <>
      <Stack>
      <Stack.Screen name="create" options={{ headerShown: false }} />
      <Stack.Screen name="cards" options={{ headerShown: false }} />
      <Stack.Screen name="topUp" options={{ headerShown: false }} />
      </Stack>
      <StatusBar 
      className="bg-secondary"
      />
    </>
  );
};

export default CardLayout;
