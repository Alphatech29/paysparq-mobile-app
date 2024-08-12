import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header";
import { useRouter } from "expo-router";
import Logo from "../../assets/Image/Logo-TP.png";
import Bank from "../../assets/Image/bank.png";
import World from "../../assets/Image/world.png";
import Pay from "../../assets/Image/pay.png";

const TransferScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-dash h-full w-full px-4">
      <Header
        title="Transfer Funds"
        handlePress={() => router.push("/dashboard")}
      />
      <ScrollView>
        <View className="pt-5">
          <View
            className=" p-3 justify-center items-center"
            style={{
              backgroundColor: "rgba(246, 107, 4, 0.02)",
              borderWidth: 0.7,
              borderColor: "#4518057C",
              borderRadius: 10,
              borderStyle: "dashed",
            }}
          >
            <Text className="font-interM text-center text-secondary">
              Easily transfer funds securely with seamless transactions and
              reliable service. Send money effortlessly anytime.
            </Text>
            <View className="pt-6 w-full justify-center items-center flex-col space-y-2">
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => router.push('/paysparq')}
                className="flex-row justify-start items-center gap-2 w-full pb-1"
                style={{
                  backgroundColor: " rgba(246, 107, 4, 0.10)",
                  borderRadius: 7,
                }}
              >
                <Image
                  source={Logo}
                  className=" h-[40px] w-[40px] rounded-[50px]"
                  resizeMode="contain"
                />
                <View>
                  <Text className="text-secondary font-interSB text-[15px]">
                    Send to Paysparq User
                  </Text>
                  <Text className="text-secondary opacity-60  font-interM text-[12px] pt-1">
                    Fast and free transfer.
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={1}
                onPress={() => router.push('/banktransfer')}
                className="flex-row justify-start items-center gap-2 w-full pb-1"
                style={{
                  backgroundColor: " rgba(246, 107, 4, 0.10)",
                  borderRadius: 7,
                }}
              >
                <Image
                  source={Bank}
                  className=" h-[40px] w-[40px] rounded-[50px]"
                  resizeMode="contain"
                />
                <View>
                  <Text className="text-secondary font-interSB text-[15px]">
                    Bank Transfer
                  </Text>
                  <Text className="text-secondary opacity-60  font-interM text-[12px] pt-1">
                    Transfer to a bank account number.
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {}}
                className="flex-row justify-start items-center gap-2 w-full pb-1"
                style={{
                  backgroundColor: " rgba(246, 107, 4, 0.10)",
                  borderRadius: 7,
                }}
              >
                <Image
                  source={World}
                  className=" h-[40px] w-[40px] rounded-[50px]"
                  resizeMode="contain"
                />
                <View>
                  <Text className="text-secondary font-interSB text-[15px]">
                  International Transfer 
                  </Text>
                  <Text className="text-secondary opacity-60  font-interM text-[12px] pt-1">
                  Send money abroad securely and quickly.
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {}}
                className="flex-row justify-start items-center gap-2 w-full pb-1"
                style={{
                  backgroundColor: " rgba(246, 107, 4, 0.10)",
                  borderRadius: 7,
                }}
              >
                <Image
                  source={Pay}
                  className=" h-[40px] w-[40px] rounded-[50px]"
                  resizeMode="contain"
                />
                <View>
                  <Text className="text-secondary font-interSB text-[15px]">
                  Pay with Paysparq
                  </Text>
                  <Text className="text-secondary opacity-60  font-interM text-[12px] pt-1">
                  Send to a Paysparq Merchant
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransferScreen;
