import { View, Text, TextInput } from "react-native";
import React from "react";

const Form = ({placeholder, value, handleChangeText, placeholderColor, otherStyles, ...props
}) => {
  return (
    <View
      className={`space-y-2 w-full p-3 ${otherStyles}`}
      style={{
        backgroundColor: "rgba(252, 237, 212, 0.20)",
        borderColor: "rgba(159, 62, 13, 0.12)",
        borderWidth: 1.2,
        borderRadius: 10,
      }}
    >
      <TextInput className='text-left text-secondary font-interSB'
       value={value}
       placeholder={placeholder}
       placeholderTextColor={placeholderColor}
       onChange={handleChangeText}
      >
      </TextInput>
    </View>
  );
};

export default Form;
