import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

const Input = ({value, name, children, width}) => {
  return (
    <View style={{width: width ? width : '100%'}}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.inputContainer}>
        {children}
        <TextInput style={styles.inputStyle} value={value} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#dedede',
    backgroundColor: 'transparent',
  },
  inputStyle: {
    color: '#222222',
    paddingBottom: 5,
    paddingLeft: 10,
    fontSize: 14,
  },
  title: {
    color: '#274FED',
    fontSize: 12,
    marginLeft: 20,
    marginBottom: -10,
  },
});

export default Input;
