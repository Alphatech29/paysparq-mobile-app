import { View, Text , TouchableOpacity } from 'react-native'
import React from 'react'
import GiftCard from '../../assets/Svg/GiftCard'
import Btc from '../../assets/Svg/Btc'
import Airtime from '../../assets/Svg/Airtime'


const DashCard = () => {
  return (
    <View className="pt-4 space-y-4 w-full justify-center items-center">
     <View
     className="py-4 px-4 w-[380px] rounded-[10px] flex-row justify-between items-center" 
     style={{backgroundColor: "rgba(246, 107, 4, 0.09)" ,  overflow: 'hidden'}}>
        <TouchableOpacity 
         activeOpacity={1}
         onPress={() => {}}
        className="space-y-3">
            <Text className="font-interB text-[16px] text-secondary">
            Buy and sell gift cards.
            </Text>
            <Text className="font-interSB text-[11px] text-secondary w-[250px]">
            Easily buy and sell gift cards with us, offering a seamless and secure experience for all your gift card transactions.
            </Text>
           <View className="bg-primary p-[4px] rounded-[7px] w-[80px] justify-center items-center">
            <Text className="text-text font-interSB">Trade Now</Text>
           </View>
        </TouchableOpacity>
        <GiftCard
        style={{
            color:"#451805",
            width: 100,
            height: 100,
            transform: [{ rotate: '120deg' }],
            opacity: 0.3,
            marginLeft: 35,
            marginBottom: -30,
           
          }}
        />
     </View>

     <View
     className="py-4 px-4 w-[380px] rounded-[10px] flex-row justify-between items-center" 
     style={{backgroundColor: "rgba(204, 210, 255, 0.20)" , overflow: 'hidden'}}>
        <TouchableOpacity 
         activeOpacity={1}
         onPress={() => {}}
        className="space-y-3">
            <Text className="font-interB text-[16px] text-secondary">
            Trade cryptocurrencies.
            </Text>
            <Text className="font-interSB text-[11px] text-secondary w-[250px]">
            Effortlessly trade cryptocurrencies and unlock endless financial possibilities today.
            </Text>
           <View className="bg-primary p-[4px] rounded-[7px] w-[80px] justify-center items-center">
            <Text className="text-text font-interSB">Trade Now</Text>
           </View>
        </TouchableOpacity>
        <Btc
        style={{
            transform: [{ rotate: '210deg' }],
            opacity: 0.3,
            marginLeft: 35,
            marginBottom: -30,
          }}
        />
     </View>

     <View
     className="py-4 px-4 w-[380px] rounded-[10px] flex-row justify-between items-center" 
     style={{backgroundColor: "rgba(192, 255, 252, 0.20)" , overflow: 'hidden'}}>
        <TouchableOpacity 
         activeOpacity={1}
         onPress={() => {}}
        className="space-y-3">
            <Text className="font-interB text-[16px] text-secondary">
            Airtime to Cash
            </Text>
            <Text className="font-interSB text-[11px] text-secondary w-[250px]">
            Easily convert airtime to cash with instant transactions, competitive rates, and secure, reliable service.
            </Text>
        </TouchableOpacity>
        <Airtime
        style={{
            transform: [{ rotate: '-20deg' }],
            marginLeft: 35,
            marginBottom: -50,
            opacity: 0.5,
          }}
        />
     </View>
    </View>
  )
}

export default DashCard