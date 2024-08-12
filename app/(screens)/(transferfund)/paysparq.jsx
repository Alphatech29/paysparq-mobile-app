import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/header";
import { useRouter } from "expo-router";
import Form from "../../../components/Transfer/form";
import CustomButton from "./../../../components/CustomButton";

const Paysparq = () => {
  const router = useRouter();

  const [activeIndex, setActiveIndex] = useState(0);
  const [form, setForm] = useState({
    accountNumber: "",
  });

  const handlePress = (index) => {
    setActiveIndex(index);
  };

  const handleChangeText = (text, field) => {
    setForm({ ...form, [field]: text });
  };

  return (
    <SafeAreaView className="bg-dash h-full w-full px-4">
      <Header
        handlePress={() => router.push("/transfer")}
        title={"Transfer to Paysparq"}
      />
      <ScrollView>
        <View className="pt-5">
          <Text className="font-interM text-center text-secondary">
          Easily transfer funds securely with seamless transactions and reliable service. Send money effortlessly anytime.
          </Text>
          <View
            className="p-3 justify-center items-center mt-4"
            style={{
              backgroundColor: "rgba(246, 107, 4, 0.02)",
              borderWidth: 0.7,
              borderColor: "#4518057C",
              borderRadius: 10,
              borderStyle: "dashed",
            }}
          >
            <Text className="w-full text-left font-interSB text-[14px] text-secondary">
              Recipient Account
            </Text>
            <Form
              placeholder="Enter 10 digits Account Number"
              placeholderColor="#5A1E0450"
              value={form.accountNumber}
              handleChangeText={(text) => handleChangeText(text, 'accountNumber')}
              otherStyles="mt-3"
            />
          

            <CustomButton
              title={"Continue"}
              handlePress={() => {
                // Add functionality here
              }}
              containerStyles="w-full min-h-[40px] mt-8"
            />
          </View>
        </View>

        <View className="pt-5 w-full">
          <View
            className="mt-4 w-full min-h-[400px]"
            style={{
              backgroundColor: "rgba(246, 107, 4, 0.02)",
              borderWidth: 0.7,
              borderColor: "#4518057C",
              borderRadius: 10,
              borderStyle: "dashed",
              overflow: "hidden",
            }}
          >
            <View className="bg-primary w-full flex-row justify-start py-[13px] px-3">
              <TouchableOpacity
                onPress={() => handlePress(0)}
                activeOpacity={activeIndex === 0 ? 1 : 0.5}
                style={{ opacity: activeIndex === 0 ? 1 : 0.5 }}
                className='mr-6'
              >
                <Text className="text-left font-interSB text-[17px] text-text">
                  Recent's
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handlePress(1)}
                activeOpacity={activeIndex === 1 ? 1 : 0.5}
                style={{ opacity: activeIndex === 1 ? 1 : 0.5 }}
              >
                <Text className="text-left font-interSB text-[17px] text-text">
                  Favourite's
                </Text>
              </TouchableOpacity>
            </View>
            <View className="p-4 w-full">
              <View className="w-full space-y-3 justify-between">
                <View
                  className="pb-1 space-y-1"
                  style={{
                    borderBottomWidth: 0.7,
                    borderBottomColor: "#45180528",
                  }}
                >
                  <Text className="text-[15px] font-interSB text-secondary text-left">
                    Gabriel Abidemi Emmanuel
                  </Text>
                  <View className="w-full flex-row justify-start ">
                    <Text className="text-secondary font-interM text-[13px] mr-2">
                      9129079450
                    </Text>
                  </View>
                
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default Paysparq;
