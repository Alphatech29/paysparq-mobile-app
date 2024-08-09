import React from 'react'
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const ScreensLayout = () => {
  
  return (
   <>
   <Stack >
   <Stack.Screen name="/addfund/addfund"  options={{headerShown:false}}/>
 </Stack>
 <StatusBar
 className="bg-secondary"
 />
   </>
  )
}

export default ScreensLayout