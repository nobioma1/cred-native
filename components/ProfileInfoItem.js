import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProfileInfoItem = ({title, info, picker}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      {!picker ? <Text style={styles.info}>{info}</Text> : picker}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#222222',
    borderTopWidth: 1,
    borderColor: '#dedede',
    height: 70,
  },
  title: {
    fontSize: 15,
    fontWeight: 'normal',
  },
  info: {
    fontSize: 15,
    opacity: 0.5,
  },
});

export default ProfileInfoItem;
