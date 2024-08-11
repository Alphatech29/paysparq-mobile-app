import { View, Text } from 'react-native'
import React from 'react'

const AccounBar = () => {
  return (
    <View className="justify-center w-full items-center pt-4">
      <View className="bg-primary w-[380px] h-[100px] rounded-xl flex-row justify-between items-center px-4">
        <View>
        <Text className="text-text text-[15px] ">Your balance</Text>
        <Text className="text-text text-[20px] font-interSB text-left">$100,000.00</Text>
        </View>
        <View>
        <Text className="text-text text-[17px] font-interSB">USD</Text>
        </View>
      </View>
    </View>
  )
}

export default AccounBar