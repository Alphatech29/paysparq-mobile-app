import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


const SelectInput = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <View className="flex-1 justify-center items-center p-4">
      <Text className="text-lg mb-4">Select an option:</Text>
      <RNPickerSelect
        onValueChange={(value) => setSelectedValue(value)}
        items={[
          { label: 'Football', value: 'football' },
          { label: 'Baseball', value: 'baseball' },
        ]}
        placeholder={{ label: 'Select an option...', value: null }}/>
      {selectedValue && ('')}
    </View>
  )
};

export default SelectInput;
