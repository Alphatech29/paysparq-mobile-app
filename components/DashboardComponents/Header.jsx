import { View, Text, Image} from 'react-native'
import React from 'react'
import { icons } from '../../constants/Icons'
import Message from '../../assets/Svg/Message'
import Notification from '../../assets/Svg/Notification'

const Header = () => {
  return (
    <View className="mt-5 px-4 w-full">
        <View className="justify-between w-full items-start flex-row mb-2">
        <View className="justify-center flex-row items-center space-x-1">
        <View>
        <Image
        source={icons.user}
        resizeMode='contain'
        className="w-[45] h-[45] rounded-[50%]"
        />
        </View>
     <View>
     <Text className="text-secondary text-[13px] font-interSB">Welcome</Text>
     <Text className="text-secondary text-[15px] font-interB">Alphatech</Text>
     </View>
      </View>
      <View className="flex-row items-end justify-end gap-2">
      <Message
      className="w-[50px] h-[50px]"
      />
      <Notification 
      className="text-secondary"
      />
      </View>
        </View>
    </View>
  )
}

export default Header