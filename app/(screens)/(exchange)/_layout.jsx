import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const ConvertLayout = () => {
  return (
    <>
      <Stack>
      <Stack.Screen name="review" options={{ headerShown: false }} />
      </Stack>
      <StatusBar 
      className="bg-secondary"
      />
    </>
  );
};

export default ConvertLayout;
