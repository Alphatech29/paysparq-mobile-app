import { View, Text } from 'react-native';
import React, { useState } from 'react'; // Added useState import
import { Picker } from '@react-native-picker/picker';

const Dropdown = () => {
    const [selectedValue, setSelectedValue] = useState('option1'); // Changed initial value to match Picker options

    return (
        <View>
            <Text>Selected Value: {selectedValue}</Text>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
            </Picker>
        </View>
    );
}

export default Dropdown;
