import React from 'react';
import { View, Text, Image, ScrollView} from 'react-native';
import Logo from '../assets/Image/Logo-TP.png';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '../components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router'; 

const Index = () => {
  const router = useRouter(); 
  return (
    <SafeAreaView className="bg-paysparq h-full">
      <ScrollView>
        <View className="flex-1 items-center justify-center w-full min-h-[85vh] px-4">
          <View className="w-full items-center justify-center min-h-[85vh]">
          <Image 
            source={Logo}
            className=" min-h-[50px] mb-24"
            resizeMode="contain"
          />
          <View className="space-y-4">
            <Text className="font-interB text-start text-4xl w-[185px] h-[93px]">
              Welcome to Paysparq
            </Text>
            <Text className="text-start text-base">
              Enjoy immediate access to your funds, seamless account management, and a world of financial opportunities right at your fingertips.
            </Text>
          </View>
          </View>
          <View className=" w-full flex-row justify-center items-center  px-2 mt-[-8%]">
            <CustomButton 
              title="Create Account"
              handlePress={() => router.push('/register')} 
              containerStyles="w-[50%] mr-2"
            />
            <CustomButton 
              title="Log In"
              handlePress={() => router.push('/dashboard')}
              containerStyles="w-[50%] ml-2 bg-text border border-primary"
              textStyles="text-primary"
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Index;
