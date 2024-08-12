import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, FlatList } from 'react-native';

const data = [
  { label: 'USD', value: 'USD', logo: require('../assets/Image/USA.png') },
  { label: 'NGN', value: 'NGN', logo: require('../assets/Image/NG.png') },
  { label: 'EUR', value: 'EUR', logo: require('../assets/Image/Euro.png') },
];

const CustomDropdown = ({ onValueChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('USD');

  const selectedItem = data.find(item => item.value === selectedValue);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onValueChange) {
      onValueChange(value); 
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setIsOpen(!isOpen)}
      >
        {selectedItem && (
          <View style={styles.selectedItem}>
            <Image source={selectedItem.logo} style={styles.logo} />
            <Text style={styles.selectedText}>{selectedItem.label}</Text>
          </View>
        )}
      </TouchableOpacity>
      
      <Modal
        visible={isOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setIsOpen(false)}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.itemContainer}
                  onPress={() => handleSelect(item.value)}
                >
                  <Image source={item.logo} style={styles.logo} />
                  <Text style={styles.itemText}>{item.label}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.value}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  selectedItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedText: {
    fontSize: 16,
    color: '#5A1E04',
    marginLeft: 8,
  },
  logo: {
    width: 25,
    height: 25,
    marginRight: 3,
    borderRadius: 50,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  itemText: {
    fontSize: 16,
  },
});
