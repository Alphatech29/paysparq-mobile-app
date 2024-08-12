import { View, Text , TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Send from '../../assets/Svg/Send'
import Addfund from "../../assets/Svg/Addfund";
import Paybills from "../../assets/Svg/Paybills";
import Convert from "../../assets/Svg/Convert";


const DashNavBar = () => {
  const router = useRouter(); 
  return (
    <View className="justify-center items-center pt-4">
      <View
        className=" h-[90px] w-[380px] rounded-xl justify-between flex-row items-center px-4"
        style={{ backgroundColor: "rgba(252, 237, 212, 0.55)" }}
      >
        <View className="justify-center items-center space-y-1">
          <TouchableOpacity 
          className="bg-primary p-[10px] rounded-[10px]" 
          style={{backgroundColor: 'rgba(246, 107, 4, 0.20)', shadowColor:"0px 1.2px 2px 0px rgba(0, 0, 0, 0.20)" , shadowOpacity: 0.2, shadowRadius: 2, elevation: 2,}}
          onPress={() => router.push('/addfund')}
          >
          <Addfund/>
          </TouchableOpacity>
          <Text className="text-[12px] font-interSB text-primary opacity-70">Add Fund</Text>
        </View>

        <View className="justify-center items-center space-y-1">
          <TouchableOpacity 
          className="bg-primary p-[10px] rounded-[10px]" 
          style={{backgroundColor: 'rgba(246, 107, 4, 0.20)', shadowColor:"0px 1.2px 2px 0px rgba(0, 0, 0, 0.20)" , shadowOpacity: 0.2, shadowRadius: 2, elevation: 2,}}
          onPress={() => router.push('/transfer')}
          >
          <Send/>
          </TouchableOpacity>
          <Text className="text-[12px] font-interSB text-primary opacity-70">Send</Text>
        </View>

        <View className="justify-center items-center space-y-1">
          <TouchableOpacity 
          className="bg-primary p-[10px] rounded-[10px]" 
          style={{backgroundColor: 'rgba(246, 107, 4, 0.20)', shadowColor:"0px 1.2px 2px 0px rgba(0, 0, 0, 0.20)" , shadowOpacity: 0.2, shadowRadius: 2, elevation: 2,}}
          onPress={() => router.push('/paybills')}
          >
          <Paybills/>
          </TouchableOpacity>
          <Text className="text-[12px] font-interSB text-primary opacity-70">Pay Bills</Text>
        </View>

        <View className="justify-center items-center space-y-1">
          <TouchableOpacity 
          className="bg-primary p-[10px] rounded-[10px]" 
          style={{backgroundColor: 'rgba(246, 107, 4, 0.20)', shadowColor:"0px 1.2px 2px 0px rgba(0, 0, 0, 0.20)" , shadowOpacity: 0.2, shadowRadius: 2, elevation: 2,}}
          onPress={() => router.push('/exchange')}
          >
          <Convert/>
          </TouchableOpacity>
          <Text className="text-[12px] font-interSB text-primary opacity-70">Convert</Text>
        </View>
      </View>
    </View>
  );
};

export default DashNavBar;
