import { View, Text , TextInput} from 'react-native'
import React from 'react'


const FormOutput = ({value , title}) => {
  return (
    <View className="pt-4 w-full">
      <View className="pb-1"  style={{ borderBottomWidth: 0.7, borderBottomColor: '#45180528'}}>
      <Text className="text-secondary text-[15px] font-interSB text-left">{title}</Text>
      <View>
        <TextInput
        value={value}
        editable={false}
        className="text-left font-interM text-secondary text-[14px] pt-1"
        >
        </TextInput>
      </View>
      </View>
    </View>
  )
}

export default FormOutput