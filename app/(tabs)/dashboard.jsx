import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Dashboard/Header';
import AccounCard from '../../components/Dashboard/AccounCard';
import DashNavBar from '../../components/Dashboard/DashNavBar';
import DashCard from '../../components/Dashboard/DashCard';




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