import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Form from './Form';

const FormView = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: '#FFF'}}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.discardBtn}>
          <Icon
            name="chevron-left"
            color="#555555"
            size={30}
            style={{padding: 0, marginLeft: -10}}
          />
        </TouchableOpacity>
        <Text style={styles.stepCount}>Step 1 of 5</Text>
      </View>
      <View style={styles.indicatorContainer}>
        <View style={[styles.indicator, styles.active]} />
        <View style={styles.indicator} />
        <View style={styles.indicator} />
        <View style={styles.indicator} />
        <View style={styles.indicator} />
      </View>
      <View>
        <Text style={styles.title}>Complete Profile</Text>
        <Text style={styles.subtitle}>
          Tell us even more about yourself and ensure that all details provided
          herein are valid and up to date.
        </Text>
      </View>
      <Form />
      <View style={styles.formFooter}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.btn}>NEXT</Text>
        </TouchableOpacity>
        <View style={styles.subtext}>
          <Icon name="lock" color="#555555" size={15} />
          <Text>{'  '}Your Data is Secure</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stepCount: {
    opacity: 0.6,
  },
  indicatorContainer: {
    marginVertical: 20,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  indicator: {
    width: 350 / 5,
    backgroundColor: '#274FED',
    opacity: 0.1,
    borderRadius: 3,
    height: 5,
  },
  active: {
    opacity: 1,
  },
  subtext: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
  },
  formFooter: {
    margin: 20,
    alignItems: 'center',
  },
  title: {
    color: '#274FED',
    fontWeight: 'bold',
    fontSize: 36,
  },
  subtitle: {
    fontSize: 16,
  },
  btn: {
    height: 46,
    width: 213,
    borderRadius: 5,
    color: '#FFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    backgroundColor: '#274FED',
    margin: 10,
  },
});

export default FormView;
