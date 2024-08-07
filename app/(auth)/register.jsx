import { View, Text, TouchableOpacity, SafeAreaView, ScrollView , StatusBar, Alert } from 'react-native';
import React, { useState } from 'react';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import {Link, router } from 'expo-router';
import { createUser } from '../../lib/appwrite';


const RegisterScreen = () => {

  const [form, setForm] = useState({
    email: "",
    username: "",
    password:"",
    phonenumber: "",
    referralCode: "",
  });


  const [isSubmiting, setisSubmiting] = useState(false)
  const submit= async () => {
    if(!form.username || !form.email || !form.phonenumber || !form.password)
      Alert.alert('error', 'Please fill al the fields')

    setisSubmiting(true);
    try {
      const result = await createUser(form.username , form.email , form.phonenumber , form.password)

      router.replace('/welcome')
    } catch (error) {
      Alert.alert('Error' , error.message)
    } finally{
      setisSubmiting(false)
    }
  }

  return (
    <SafeAreaView className="bg-paysparq justify-center items-center h-full">
     <ScrollView>
     <View className="w-full p-4 min-h-[80vh] pt-7">
        <View>
          <Text className="font-interB text-[24px] text-secondary">
            Create Account
          </Text>
          <Text className="font-interM text-[15px] text-secondary opacity-50 pt-1">
            Let's get you set up with an account right away.
          </Text>
          <FormField 
            title="E-mail"
            placeholder="Enter your email address"
            placeholderColor="#4518054D"
            value={form.email}
            handleChangeText={(e) => setForm({...form, email: e})}
            otherStyles="mt-4"
            keyboardType="email-address"
          />
          <FormField 
            title="User Name"
            placeholder="Enter your username"
            placeholderColor="#4518054D"
            value={form.username}
            handleChangeText={(e) => setForm({...form, username: e})}
            otherStyles="mt-3"
         
          />
         
           <FormField 
            title="Password"
            placeholder="Password"
            placeholderColor="#4518054D"
            value={form.password}
            handleChangeText={(e) => setForm({...form, password: e})}
            otherStyles="mt-3"
            keyboardType="password"
          />
          <FormField 
            title="Phone Number"
            placeholder="+2439129079450"
            placeholderColor="#4518054D"
            value={form.phonenumber}
            handleChangeText={(e) => setForm({...form, phonenumber: e})}
            otherStyles="mt-3"
        
          />
          <FormField 
            title="Referral Code"
            placeholder="Referral code (Optional)"
            placeholderColor="#4518054D"
            value={form.referralCode}
            handleChangeText={(e) => setForm({...form, referralCode: e})}
            otherStyles="mt-3"
    
          />
          <Text className="font-interM text-sm text-secondary opacity-50 mt-1">Referral code is not compulsory, please leave the box empty if you don't have one.</Text>
          <Text className="font-interM text-sm mt-5 text-secondary opacity-50">By continuing, you agree to Paysparq's <Text className="text-primary">Terms of Service, AML Policy,</Text> and <Text className="text-primary">Privacy Policy</Text>. Please review these documents to understand your rights and obligations before using our services.</Text>
           <CustomButton 
              title="Create"
              handlePress={submit} 
              containerStyles="w-full mt-5"
              isLoading={isSubmiting}
            />
        </View>
        <View className="items-center justify-center mt-2">
      <Text className="text-secondary text-[13.5px] items-center font-interSB">
        Have an account already?{' '}
        <Link href="/login" className="text-primary">Sign In</Link>
      </Text>
    </View>
      </View>
     </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default RegisterScreen;
