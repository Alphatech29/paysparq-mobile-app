import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/DashboardComponents/Header';
import AccounCard from '../../components/DashboardComponents/AccounCard';
import DashNavBar from '../../components/DashboardComponents/DashNavBar';
import DashCard from '../../components/DashboardComponents/DashCard';




const DashboardScreen = () => {
  return (
    <SafeAreaView className="bg-dash h-full flex-col justify-center items-center w-full">
<View className="h-full w-full">
<Header />
<ScrollView>
<AccounCard />
<DashNavBar />
<DashCard />
</ScrollView>
</View>
    </SafeAreaView>
  )
}

export default DashboardScreen