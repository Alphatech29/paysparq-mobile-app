import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const TransferLayout = () => {
  return (
    <>
      <Stack>
      <Stack.Screen name="banktransfer" options={{ headerShown: false }} />
      <Stack.Screen name="paysparq" options={{ headerShown: false }} />
      </Stack>
      <StatusBar 
      className="bg-secondary"
      />
    </>
  );
};

export default TransferLayout;
