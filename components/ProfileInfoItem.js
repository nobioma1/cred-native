import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class ProfileInfoItem extends React.Component {
  render() {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{this.props.title}</Text>
        {!this.props.picker ? (
          <Text style={styles.info}>{this.props.info}</Text>
        ) : (
          this.props.picker
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#222222',
    borderTopWidth: 1,
    borderColor: '#e5e5e5',
    height: 55,
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
