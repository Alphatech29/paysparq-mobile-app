import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import Chevronleft from '../assets/Svg/Chevronleft'; 

const Header = ({ title, handlePress }) => {
  const router = useRouter(); 

  return (
    <View className="w-full py-3 flex-row justify-start items-center space-x-3">
      <TouchableOpacity 
        className="p-2 w-[50px]" 
        onPress={handlePress}
      >
        <Chevronleft />
      </TouchableOpacity>
      <View className="w-[270px] flex items-center justify-center">
        <Text className="text-secondary text-center text-[18px] font-interSB">{title}</Text>
      </View>
    </View>
  );
};

export default Header;
