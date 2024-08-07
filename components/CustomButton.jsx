import { TouchableOpacity , Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title , handlePress , containerStyles , textStyles , isLoading}) => {

  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    className={`rounded-[10px] bg-primary  min-h-[50px]  justify-center items-center ${containerStyles} ${isLoading? 'opacity-50' : ''}`} disabled={isLoading}>
      <Text 
      className={`text-text text-base font-interB justify-center items-center ${textStyles} `}>
        {title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton