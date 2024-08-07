import { View, Image, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants/Icons';

const active_color = '#F66B04'; 
const inactive_color = 'rgba(246, 107, 4, 0.3)';

const TabsLayout = () => {
    const TabIcon = ({ icon, focused, name }) => {
        
        const color = focused ? active_color : inactive_color;

        return (
            <View className="justify-center items-center">
               <Image
                        source={icon}
                        resizeMode='contain'
                        tintColor={color}
                        className="w-6 h-6"
                    />
                <Text className={`${focused ? 'font-interSB' : 'font-interM'} text-[11px]`} style={{ color }}>
                    {name}
                </Text>
            </View>
        );
    };

    return (
        <Tabs screenOptions={{
            tabBarShowLabel: false, 
            tabBarActiveTintColor: '#F66B04',
            tabBarInactiveTintColor:'rgba(246, 107, 4, 0.3)',
            tabBarStyle:{
                backgroundColor: 'rgba(246, 107, 4, 0.05)',
                borderTopWidth: 1,
                borderTopColor:'#F66D042F',
                height: 84,
            }
        }}>
            <Tabs.Screen 
                name='dashboard' 
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon 
                            icon={icons.home}
                            focused={focused} 
                            name="Home"
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name='invest' 
                options={{
                    title: "Invest",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon 
                            icon={icons.invest}
                            focused={focused} 
                            name="Invest"
                        />
                    )
                }}
            />
             <Tabs.Screen 
                name='card' 
                options={{
                    title: "card",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon 
                            icon={icons.cards}
                            focused={focused} 
                            name="Cards"
                        />
                    )
                }}
            />
              <Tabs.Screen 
                name='accounts' 
                options={{
                    title: "accounts",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon 
                            icon={icons.bank}
                            focused={focused} 
                            name="Accouts"
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name='more' 
                options={{
                    title: "more",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon 
                            icon={icons.more}
                            focused={focused} 
                            name="More"
                        />
                    )
                }}
            />
        </Tabs>
    );
};

export default TabsLayout;
