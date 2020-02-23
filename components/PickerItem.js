import React from 'react';
import {StyleSheet, View, Picker} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PickerItem = () => {
  return (
    <View>
      <Icon name="keyboard-arrow-down" style={styles.pickerIcon} />
      <Picker style={styles.picker}>
        <Picker.Item label="Full Time" value="f-time" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: 130,
    opacity: 0.5,
    backgroundColor: 'transparent',
  },
  pickerIcon: {
    position: 'absolute',
    opacity: 0.5,
    bottom: 15,
    right: 10,
    fontSize: 20,
  },
});

export default PickerItem;
