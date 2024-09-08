import { View, Text, ScrollView , Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/DashboardComponents/Header'
import { StatusBar } from 'expo-status-bar'
import CardTabs from '../../components/Card/CarsTabs'
import Master from '../../assets/Svg/Master'
import Logo from '../../assets/Image/Logo.png'


const CardScreen = () => {
  return (
    <SafeAreaView className="bg-dash h-full justify-center items-center">
      <Header/>
      <ScrollView contentContainerStyle={{display: 'flex', justifyContent: 'center',
      alignItems: 'center'}}>
        <View className="bg-primary h-[170px] w-[380px] rounded-[10px] mt-3 p-2 py-4">
          <View className="justify-between flex-row items-center">
            <Text className="text-text font-interSB text-[17px]">Gabriel Abidemi Emmanuel</Text>
            <View className="justify-center items-center flex-row">
              <Image
              source={Logo}
              className="w-[20px] h-[20px] mr-1"
              resizeMode='Contain'
              />
              <Text className="text-text font-interSB text-[16px]">Paysparq Bank</Text>
            </View>
          </View>
          <Text className="text-text font-interSB text-[18px] mt-[70px]">5020 30** **** 8730</Text>
          <View className="flex-row justify-end items-center mt-3">
            <Master/>
            <Text className="text-text font-interSB text-[16px] pl-1">Master Card</Text>
          </View>
        </View>
        <CardTabs/>

        <View className="justify-start items-start w-full mt-4 px-2">
          <Text>Recent Transaction</Text>
          <View className="h-[350px] w-full rounded-[10px] mt-2" style={{backgroundColor:'rgba(246, 107, 4, 0.10)'}}>

          </View>
        </View>
      </ScrollView>
      <StatusBar className="bg-secondary" />
    </SafeAreaView>
   
  )
}

export default CardScreen