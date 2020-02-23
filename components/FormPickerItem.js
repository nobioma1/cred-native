import React from 'react';
import {StyleSheet, View, Picker, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FormPickerItem = ({name, children, value}) => {
  return (
    <View style={{width: `${95 / 2}%`}}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.pickerContainer}>
        {children}
        <Picker style={styles.picker}>
          <Picker.Item label={value} value={value} />
        </Picker>
        <Icon name="keyboard-arrow-down" style={styles.pickerIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#dedede',
  },
  picker: {
    height: 50,
    backgroundColor: 'transparent',
    width: '100%',
  },
  pickerIcon: {
    position: 'absolute',
    opacity: 0.5,
    bottom: 15,
    right: 10,
    fontSize: 20,
  },
  title: {
    color: '#274FED',
    fontSize: 12,
    marginLeft: 20,
    marginBottom: -10,
  },
});

export default FormPickerItem;
