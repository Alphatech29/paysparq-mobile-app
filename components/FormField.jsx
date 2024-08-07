import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'




const FormField = ({ title , placeholder , value , handleChangeText , placeholderColor , otherStyles , ...props}) => {
    const [showPassword, setshowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text
      className="text-sm font-interSB text-secondary">
      {title}
    </Text>
    <View className="w-full h-[47px] focus:border-green-500 text-secondarys items-center px-2 flex-row"  style={{backgroundColor: 'rgba(246, 107, 4, 0.07)', borderColor: 'rgba(159, 62, 13, 0.30)', borderWidth: 1.2, borderRadius: 10,}}>
        <TextInput 
        className="flex-1 text-secondary font-interSB text-base"
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        onChange={handleChangeText}
        secureTextEntry={title === 'password' && !showPassword}
        />
        {title === "password" && (
         <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
          <image
          source={!showPassword? icon.eye : icon.eyehide}
          className="w-6 h-6"
          resizeMode="contain"
          />
         </TouchableOpacity>
        )}
    </View>
    </View>
  )
}

export default FormField