import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import CustomButton from "../../../components/CustomButton";
import { icons } from "../../../constants/Icons";

const CardsScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="bg-dash h-full w-full px-4">
      <Text className="text-secondary text-[30px] font-interSB mt-4">Cards</Text>
      <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
        <View className="w-full space-y-[60px] items-center">
          <Image source={icons.card} />
          <Text className="text-center text-[15px] text-secondary font-interSB">
            Instantly create a USD virtual card for online purchases. Secure, convenient, and accepted worldwide for all transactions.
          </Text>
          <CustomButton
            title={"Get a virtual card"}
            handlePress={() => router.push("/create")}
            containerStyles="w-[280px] min-h-[40px] mt-8"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CardsScreen;
