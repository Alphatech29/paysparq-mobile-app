import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../../../components/header'
import { useRouter } from 'expo-router'

const topUp = () => {
    const router = useRouter();
  return (
    <SafeAreaView className="bg-dash h-full">
        <Header
         title="Top up USD card"
         handlePress={() => router.push("/card")}
        />
    </SafeAreaView>
  )
}

export default topUp