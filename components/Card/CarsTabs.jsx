import { View, Text , TouchableOpacity } from 'react-native'
import React from 'react'
import AddFund from "./../../assets/Svg/Addfund";
import PayBills from '../../assets/Svg/Paybills';
import Send from '../../assets/Svg/Send';
import More from '../../assets/Svg/More';
import { useRouter } from 'expo-router';

const CardTabs = () => {
  const router = useRouter();
  return (
    <View className="justify-center items-center flex-row w-full mt-4 space-x-5">
     <TouchableOpacity
     onPress={() => router.push('/topUp')}
      className="bg-primary justify-center items-center p-2 rounded-[7px] w-[77px]">
      <AddFund
      color="#fff"
      />
      <Text className="text-text font-interSB pt-1 text-[12px]">Top Up</Text>
     </TouchableOpacity>

     <TouchableOpacity className="bg-primary justify-center items-center p-2 rounded-[7px] w-[77px]">
     <Send
     color="#fff"
     />
      <Text className="text-text font-interSB pt-1 text-[12px]">Withdraw</Text>
     </TouchableOpacity>

     <TouchableOpacity className="bg-primary justify-center items-center p-2 rounded-[7px] w-[77px]">
     <PayBills
      color="#fff"
      />
      <Text className="text-text font-interSB pt-1 text-[12px]">Statement</Text>
     </TouchableOpacity>

     <TouchableOpacity className="bg-primary justify-center items-center p-2 rounded-[7px] w-[77px]">
      <More/>
      <Text className="text-text font-interSB pt-1 text-[12px]">More</Text>
     </TouchableOpacity>
    </View>
  )
}

export default CardTabs