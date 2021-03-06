import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Input from './Input';
import FormPickerItem from './FormPickerItem';
import Calender from '../assets/calender';
import GName from '../assets/gname';
import Graduate from '../assets/graduate';
import Home from '../assets/home';
import Male from '../assets/male';
import Nationality from '../assets/nationality';
import Relationship from '../assets/relationship';
import Status from '../assets/status';
import Employment from '../assets/employment';

class Form extends React.Component {
  state = {
    dob: 'Jul 19, 1997',
    gender: 'Male',
    residentialAddress: '25, Ayonuga Street, Fadeyi, Lagos.',
    educationLevel: 'Graduate',
    nationality: 'Nigerian',
    employment: 'Employed',
    maritalStatus: 'Single',
    guarantorName: 'Oshokoya Joseph',
    relationship: 'Brother',
    guarantorAddress: 'Route 7, Ink Park, Toronto',
    guarantorNumber: '0708 188 8124',
  };

  render() {
    return (
      <View style={styles.form}>
        <View style={[styles.layout, styles.spacing]}>
          <FormPickerItem name="Date of Birth" value={this.state.dob}>
            <Calender />
          </FormPickerItem>
          <FormPickerItem name="Gender" value={this.state.gender}>
            <Male />
          </FormPickerItem>
        </View>
        <View style={[styles.layout, styles.spacing, styles.fullWidth]}>
          <Input
            name="Residential Address"
            value={this.state.residentialAddress}>
            <Home />
          </Input>
        </View>
        <View style={[styles.layout, styles.spacing]}>
          <FormPickerItem
            name="Educational Level"
            value={this.state.educationLevel}>
            <Graduate />
          </FormPickerItem>
          <FormPickerItem name="Nationality" value={this.state.nationality}>
            <Nationality />
          </FormPickerItem>
        </View>
        <View style={[styles.layout, styles.spacing]}>
          <FormPickerItem
            name="Employment Status"
            value={this.state.employment}>
            <Employment />
          </FormPickerItem>
          <FormPickerItem
            name="Marital Status"
            value={this.state.maritalStatus}>
            <Status />
          </FormPickerItem>
        </View>
        <View style={[styles.layout, styles.spacing]}>
          <Input
            name="Guarantor’s Name"
            value={this.state.guarantorName}
            width="48%">
            <GName />
          </Input>
          <FormPickerItem name="Relationship" value={this.state.relationship}>
            <Relationship />
          </FormPickerItem>
        </View>
        <View style={[styles.layout, styles.spacing]}>
          <Input
            name="Guarantor’s Address"
            value={this.state.guarantorAddress}
            width="49%">
            <Home />
          </Input>
          <Input
            name="Guarantor’s Contact Number"
            value={this.state.guarantorNumber}
            width="48%">
            <Text style={{paddingRight: 10}}></Text>
          </Input>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    marginTop: 20,
  },
  layout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  spacing: {
    marginVertical: 10,
  },
});

export default Form;
