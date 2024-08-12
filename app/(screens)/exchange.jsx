import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header";
import { useRouter } from "expo-router";
import Form from "../../components/Transfer/form";
import CustomButton from "../../components/CustomButton";

const Banktransfer = () => {
  const router = useRouter();

  const [activeIndex, setActiveIndex] = useState(0);
  const [form, setForm] = useState({
    accountNumber: "",
    bankName: "",
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
        handlePress={() => router.push("/dashboard")}
        title={"Convert your money"}
      />
      <ScrollView>
        <View className="pt-5">
          <Text className="font-interM text-center text-secondary">
          Easily convert your money from one currency to another securely.
          </Text>
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
          
           <View className="w-full items-center">
           <Form
              placeholder="Enter 10 digits Account Number"
              placeholderColor="#5A1E0450"
              value={form.accountNumber}
              handleChangeText={(text) => handleChangeText(text, 'accountNumber')}
              otherStyles="mt-3 py-4"
            />
           <View className="rounded-[7px] bg-primary mt-3"> 
            <Text className=" text-text p-[3px] font-interSB text-[13px]">1USD=1550 NGN</Text></View>
            <Form
              placeholder="Select Beneficiaries Bank"
              placeholderColor="#5A1E0450"
              value={form.bankName}
              handleChangeText={(text) => handleChangeText(text, 'bankName')}
              otherStyles="mt-3 py-4"
            />
           </View>

            <CustomButton
              title={"Continue"}
              handlePress={() => {
                // Add functionality here
              }}
              containerStyles="w-full min-h-[40px] mt-8"
            />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Banktransfer;
