import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Input = ({value, name, icon}) => {
  return (
    <View style={{minWidth: `${95 / 2}%`}}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.inputContainer}>
        <Icon name={icon} color="#000" style={{opacity: 0.4}} size={18} />
        <TextInput style={styles.inputStyle} value={value} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.6,
    borderStyle: 'solid',
    borderBottomColor: '#555555',
    opacity: 0.5,
    backgroundColor: 'transparent',
  },
  inputStyle: {
    color: '#222222',
    paddingBottom: 5,
    paddingLeft: 15,
    fontSize: 14,
  },
  title: {
    color: '#274FED',
    fontSize: 12,
    marginLeft: 18,
    marginBottom: -10,
  },
});

export default Input;
