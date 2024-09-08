import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Header from "../../../components/header";
import CustomButton from "../../../components/CustomButton";
import Icon from "../../../components/Convert/icon"
import { icons } from "../../../constants/Icons";




const Review = () => {
  const router = useRouter();


  return (
    <SafeAreaView className="bg-dash h-full w-full px-4">
      <Header
        handlePress={() => router.push("/exchange")}
        title={"Review"}
      />
      <ScrollView>
        <View className="pt-5">
          <Text className="font-interM text-center text-secondary">
          Confirm details of your transaction </Text>
          <View
            className="p-3 items-center justify-between mt-4 h-[70vh] w-full"
            style={{
              backgroundColor: "rgba(246, 107, 4, 0.02)",
              borderWidth: 0.7,
              borderColor: "#4518057C",
              borderRadius: 10,
              borderStyle: "dashed",
            }}
          >
           <View>
           <View className="w-full items-center justify-center">
              <View className="bg-primary w-[360px] rounded-[10px] flex-row justify-center items-center h-[80px] ">
              <View className="justify-center items-center flex-row">
                  <Text className="text-text text-[18px] font-interSB">$2</Text>
                  <Image
                  source={icons.usa}
                  className="rounded-[50%] border-text w-[30px] h-[30px] ml-1"
                  resizeMode="fill"
                  />
                </View>
                <Icon/>
                <View className="justify-center items-center flex-row">
                  <Image
                  source={icons.ngn}
                  className="rounded-[50%] w-[30px] h-[30px] mr-1 ml-1"
                  resizeMode="fill"
                  />
                  <Text className="text-text text-[18px] font-interSB">₦3,100</Text>
                </View>
              </View>
            </View>
           <View>
           <View>
              <View className="items-center justify-between flex-row w-full p-3 mt-8"  style={{
                backgroundColor: "rgba(246, 107, 4, 0.00)",
                borderBottomWidth: 0.7,
                borderBottomColor: "#4518051E",
              }}>
                <Text className="text-[16px] font-interSB text-secondary opacity-50">From</Text>
                <View>
                  <Text className="text-[16px] font-interSB text-secondary opacity-50 text-right">$2</Text>
                  <Text className="text-[14px] font-interSB text-secondary opacity-50 text-right">USD Wallet</Text>
                </View>
              </View>
            </View>

            <View>
              <View className="items-center justify-between flex-row w-full p-3 mt-3"
              style={{
                backgroundColor: "rgba(246, 107, 4, 0.02)",
                borderBottomWidth: 0.7,
                borderBottomColor: "#4518051E",
              }}
              >
                <Text className="text-[16px] font-interSB text-secondary opacity-50">To</Text>
                <View>
                  <Text className="text-[16px] font-interSB text-secondary opacity-50 text-right">₦3100</Text>
                  <Text className="text-[14px] font-interSB text-secondary opacity-50 text-right">NGN Wallet</Text>
                </View>
              </View>
            </View>

            <View>
              <View className="items-center justify-between flex-row w-full p-3 mt-2">
                <Text className="text-[16px] font-interSB text-secondary opacity-50">Type</Text>
                <View>
                  <Text className="text-[16px] font-interSB text-secondary opacity-50 text-right">Currency conversion</Text>
                </View>
              </View>
            </View>
           </View>
           </View>
         <CustomButton
         title={"Covert Money"}
         handlePress={() => {}}
         containerStyles="w-full min-h-[40px] mt-8"
         />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Review;
