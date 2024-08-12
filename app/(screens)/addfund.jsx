import { View, Text , ScrollView , Share } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/header'
import FormOutput from '../../components/AddFund/FormOutput'
import CustomButton from "../../components/CustomButton"
import { useRouter } from 'expo-router'
import * as Clipboard from 'expo-clipboard';




const AddFundScreen = () => {
  const router = useRouter(); 

  const accountDetails = {
    accountName: 'Alphatech Multimedia Technologies',
    accountNumber: '8353024891',
    bankName: 'Paysparq MFB',
  };

  const handleCopy = (text) => {
    Clipboard.setString(text);
    alert('Copied');
  };

  const handleShare = async (details) => {
    try {
      await Share.share({
        message: `Account Name: ${details.accountName}\nAccount Number: ${details.accountNumber}\nBank Name: ${details.bankName}`,
      });
    } catch (error) {
      alert('Failed to share details!');
    }
  };

  return (
    <SafeAreaView className="bg-dash h-full w-full px-4">
      <Header 
      title="Your NGN Account"
      handlePress={() =>  router.push('/dashboard')}
      />
      <ScrollView>
        <View className="pt-5">
         <View className=" p-3" style={{ backgroundColor: 'rgba(246, 107, 4, 0.02)',  borderWidth: 0.7, borderColor: '#4518057C', borderRadius: 10, borderStyle: 'dashed', }}>
         <Text className="font-interM text-center text-secondary">
          Money transfers sent to this bank account will automatically top up your Paysparq wallet. Receive your salary or fund any local bank account directly into your Paysparq wallet.
          </Text>
          <FormOutput
          title={'Account Name:'}
          value={accountDetails.accountName}
          />
           <FormOutput
          title={'Account Number:'}
          value={accountDetails.accountNumber}
          />
           <FormOutput
          title={'Bank Name:'}
          value={accountDetails.bankName}
          />
         <View className="mt-7 flex-row justify-between items-center w-full ">
         <CustomButton
          title={'Copy Number'}
          handlePress={() => handleCopy(accountDetails.accountNumber)}
          containerStyles="w-[]  min-h-[40px] w-[160px]  bg-text border border-primary"
          textStyles="text-primary"
          />

           <CustomButton
          title={'Share Details'}
          handlePress={() => handleShare(accountDetails)}
          containerStyles="w-[]  min-h-[40px] w-[160px]"
          />
         </View>
         </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default AddFundScreen