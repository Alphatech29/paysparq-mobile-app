import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StatusBar, Alert } from 'react-native';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';
import { createUser } from '../../lib/appwrite';

const RegisterScreen = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    phonenumber: "",
    referralCode: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.username || !form.email || !form.phonenumber || !form.password) {
      Alert.alert('Error', 'Please fill all the required fields');
      return;
    }

    setIsSubmitting(true);
    try {
      
      const result = await createUser(form.email, form.username, form.phonenumber, form.password);
      if (result) {
        router.replace('/welcome');
      } else {
        Alert.alert('Error', 'Failed to create user');
      }
    } catch (error) {
      Alert.alert('Error', error.message || 'An error occurred during registration');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-paysparq justify-center items-center h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
              handleChangeText={(text) => setForm({ ...form, email: text })}
              otherStyles="mt-4"
              keyboardType="email-address"
            />
            <FormField
              title="User Name"
              placeholder="Enter your username"
              placeholderColor="#4518054D"
              value={form.username}
              handleChangeText={(text) => setForm({ ...form, username: text })}
              otherStyles="mt-3"
            />
            <FormField
              title="Password"
              placeholder="Password"
              placeholderColor="#4518054D"
              value={form.password}
              handleChangeText={(text) => setForm({ ...form, password: text })}
              otherStyles="mt-3"
              secureTextEntry
            />
            <FormField
              title="Phone Number"
              placeholder="+2439129079450"
              placeholderColor="#4518054D"
              value={form.phonenumber}
              handleChangeText={(text) => setForm({ ...form, phonenumber: text })}
              otherStyles="mt-3"
            />
            <FormField
              title="Referral Code"
              placeholder="Referral code (Optional)"
              placeholderColor="#4518054D"
              value={form.referralCode}
              handleChangeText={(text) => setForm({ ...form, referralCode: text })}
              otherStyles="mt-3"
            />
            <Text className="font-interM text-sm text-secondary opacity-50 mt-1">
              Referral code is not compulsory, please leave the box empty if you don't have one.
            </Text>
            <Text className="font-interM text-sm mt-5 text-secondary opacity-50">
              By continuing, you agree to Paysparq's{' '}
              <Text className="text-primary">Terms of Service, AML Policy,</Text> and{' '}
              <Text className="text-primary">Privacy Policy</Text>. Please review these documents to understand your rights and obligations before using our services.
            </Text>
            <CustomButton
              title="Create"
              handlePress={submit}
              containerStyles="w-full mt-5"
              isLoading={isSubmitting}
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
