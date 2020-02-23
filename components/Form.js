import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Input from './Input';
import FormPickerItem from './FormPickerItem';

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
        <View style={styles.layout}>
          <FormPickerItem
            name="Date of Birth"
            value={this.state.dob}
            icon="date-range"
          />
          <FormPickerItem
            name="Gender"
            value={this.state.gender}
            icon="gender-male"
          />
        </View>
        <Input
          name="Residential Address"
          value={this.state.residentialAddress}
          icon="home"
        />
        <View style={styles.layout}>
          <FormPickerItem
            name="Educational Level"
            value={this.state.educationLevel}
            icon="graduation-cap"
          />
          <FormPickerItem
            name="Nationality"
            value={this.state.nationality}
            icon="graduation-cap"
          />
        </View>
        <View style={styles.layout}>
          <FormPickerItem
            name="Employment Status"
            value={this.state.employment}
            icon="briefcase"
          />
          <FormPickerItem
            name="Marital Status"
            value={this.state.maritalStatus}
            icon="briefcase"
          />
        </View>
        <View style={styles.layout}>
          <Input
            name="Guarantor’s Name"
            value={this.state.guarantorName}
            icon="person"
          />
          <FormPickerItem
            name="Relationship"
            value={this.state.relationship}
            icon="briefcase"
          />
        </View>
        <View style={styles.layout}>
          <Input
            name="Guarantor’s Address"
            value={this.state.guarantorAddress}
            icon="home"
          />
          <Input
            name="Guarantor’s Contact Number"
            value={this.state.guarantorNumber}
          />
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
    marginVertical: 10,
  },
});

export default Form;
