import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/header";
import { useRouter } from "expo-router";
import Form from "../../../components/Transfer/form";
import CustomButton from "./../../../components/CustomButton";
import Ionicons from '@expo/vector-icons/Ionicons';

const CreateCard = () => {
  const router = useRouter();

  const [activeIndex, setActiveIndex] = useState(0);
  const [form, setForm] = useState({
    cardName: "",
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
        handlePress={() => router.push("/card")}
        title={"Create a card"}
      />
      <ScrollView>
        <View className="pt-5">
          <Text className="font-interM text-center text-secondary">
            Create a USD virtual card instantly and securely. Enjoy online
            shopping and payments with ease and convenience.
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
            <Form
              title={"Card name"}
              placeholder="Enter 10 digits Account Number"
              placeholderColor="#5A1E0450"
              value={form.accountNumber}
              handleChangeText={(text) =>
                handleChangeText(text, "accountNumber")
              }
              otherStyles="mt-1 py-4"
            />
            <Form
              title={"Choose account to pay from"}
              placeholder="Choose Wallet"
              placeholderColor="#5A1E0450"
              value={form.bankName}
              handleChangeText={(text) => handleChangeText(text, "bankName")}
              otherStyles="mt-1 py-4"
              customStyles="mt-4"
            />
            <View className=" w-[350px] flex-row justify-center items-center mt-3 p-2 rounded-[10px]" style={{backgroundColor:'rgba(246, 107, 4, 0.7)'}}>
            <Ionicons name="warning" size={20} color="#FFCC00" />
              <Text className="text-left text-[11px] text-text">Your account will be charged $5 to create your virtual USD card.</Text>
            </View>
            <Form
              title={"Enter amount"}
              placeholder="Amount to fund card in USD"
              placeholderColor="#5A1E0450"
              value={form.bankName}
              handleChangeText={(text) => handleChangeText(text, "bankName")}
              otherStyles="mt-1 py-4"
              customStyles="mt-4"
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateCard;
