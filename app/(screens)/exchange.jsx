import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header";
import { useRouter } from "expo-router";
import Form from "../../components/Transfer/form";
import CustomButton from "../../components/CustomButton";
import Dropdown from "../../components/Dropdown";

const BankTransfer = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    amount: "",
    exchangeAmount: "",
  });

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
              <View
                className="flex-row mt-3 w-full justify-between"
                style={{
                  backgroundColor: "rgba(252, 237, 212, 0.20)",
                  borderColor: "rgba(159, 62, 13, 0.12)",
                  borderWidth: 1.2,
                  borderRadius: 10,
                }}
              >
                <Dropdown />
                <Form
                  placeholder="Amount"
                  placeholderColor="#5A1E0450"
                  value={form.amount}
                  handleChangeText={(text) => handleChangeText(text, "amount")}
                  otherStyles=" py-4 w-[250px] border-0"
                  style={{ textAlign: 'right' }}
                />
              </View>
              <View className="rounded-[7px] bg-primary mt-3">
                <Text className="text-text p-[3px] font-interSB text-[13px]">
                  1USD=1550 NGN
                </Text>
              </View>
              <View
                className="flex-row mt-3 w-full justify-between"
                style={{
                  backgroundColor: "rgba(252, 237, 212, 0.20)",
                  borderColor: "rgba(159, 62, 13, 0.12)",
                  borderWidth: 1.2,
                  borderRadius: 10,
                }}
              >
                <Dropdown />
                <Form
                  placeholder="Exchange Amount"
                  placeholderColor="#5A1E0450"
                  value={form.exchangeAmount}
                  handleChangeText={(text) => handleChangeText(text, "exchangeAmount")}
                  otherStyles=" py-4 w-[250px] border-0"
                  style={{ textAlign: 'right' }}
                />
              </View>
            </View>
            <CustomButton
              title={"Continue"}
              handlePress={() => router.push('/review')}
              containerStyles="w-full min-h-[40px] mt-8"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BankTransfer;
