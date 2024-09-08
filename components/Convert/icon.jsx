import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const icon = () => {
  return (
    <View className="flex-row justify-center items-center">
  <View className="mr-[-13px]"><Ionicons name="chevron-forward-outline" size={20} color='#fff'/></View>
  <View className="mr-[-13px]"><Ionicons name="chevron-forward-outline" size={20} color='rgba(255, 255, 255, 0.7)'/></View>
  <View className="mr-[-5px]" ><Ionicons name="chevron-forward-outline" size={20} color='rgba(255, 255, 255, 0.4)'/></View>
</View>
  )
}

export default icon