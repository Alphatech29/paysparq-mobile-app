import { View, Text, SafeAreaView, ScrollView, StatusBar, Alert } from 'react-native';
import React, { useState } from 'react';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
import { logIn } from '../../lib/appwrite';
import { router } from 'expo-router';

const LoginScreen = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Corrected variable name to isSubmitting
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill all the required fields');
      return;
    }

    setIsSubmitting(true);
    try {
   await logIn(form.email, form.password); 
      if (result) {
        router.replace('/dashboard');
      } else {
        Alert.alert('Error', 'Failed to login');
      }
    } catch (error) {
      Alert.alert('Error', error.message || 'An error occurred during login');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-paysparq justify-center items-center h-full">
      <ScrollView className="w-full ">
        <View className="w-full p-4 h-full pt-7">
          <View>
            <Text className="font-interB text-[24px] text-secondary">
              Login
            </Text>
            <Text className="font-interM text-[15px] text-secondary opacity-50 pt-1">
              Securely access your account with ease.
            </Text>
            <FormField 
              title="Email"
              placeholder="Enter your email"
              placeholderColor="#4518054D"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles="mt-7"
              keyboardType="default"
            />
            <FormField 
              title="Password"
              placeholder="Password"
              placeholderColor="#4518054D"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles="mt-4"
              keyboardType="password"
            />
          
            <View className="items-end justify-end">
              <Text className=" mt-3 "><Link href="/Sign-in" className="text-primary font-interM text-[14px]">Forgot Password</Link></Text>
            </View>
         
            <CustomButton 
              title="Log In"
              handlePress={submit} 
              containerStyles="w-full mt-[40px]"
              isLoading={isSubmitting}
            />
          </View>
          <View className="items-center justify-center mt-2 w-full">
            <Text className="text-secondary text-[13.5px] items-center font-interSB">
              Don't have an account?{' '}
              <Link href="/register" className="text-primary">Create account</Link>
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default LoginScreen;
