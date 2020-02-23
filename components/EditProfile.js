import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ProfileInfoItem from './ProfileInfoItem';
import PickerItem from './PickerItem';

class EditProfile extends React.Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: '#FFF'}}>
        <View style={styles.topSection}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Form')}
            style={styles.discardBtn}>
            <Icon
              name="chevron-left"
              color="#FE2B5E"
              size={30}
              style={{padding: 0, marginLeft: -10}}
            />
            <Text style={styles.discardBtnText}>Discard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.saveBtnText}>Save</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Edit Profile</Text>
        <View style={styles.subnavigation}>
          <TouchableOpacity style={styles.navbtn}>
            <Text style={styles.navbtnText}>Personal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navbtn}>
            <Text style={styles.navbtnText}>Security</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navbtn}>
            <Text style={[styles.navbtnText, styles.active]}>Others</Text>
          </TouchableOpacity>
        </View>
        <View>
          <ProfileInfoItem title="Employer" info="CredPal Limited" />
          <ProfileInfoItem
            title="Office Address"
            info="75, Olonode Street, A...ba, Lagos."
          />
          <ProfileInfoItem title="Job Title" info="Graphics & UI/UX Designer" />
          <ProfileInfoItem title="Contract Type" picker={<PickerItem />} />
          <ProfileInfoItem title="Salary" info="₦ 840,000" />
          <ProfileInfoItem title="Next of Kin" info="Oshokoya Joseph" />
          <ProfileInfoItem title="Relationship" info="Brother" />
          <ProfileInfoItem
            title="Address"
            info="Route 7, Ink Park, Toronto,...o, CA."
          />
          <ProfileInfoItem title="Contact Number" info="0708 188 8124" />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  discardBtn: {
    flexDirection: 'row',
    color: '#FE2B5E',
    paddingLeft: 0,
    padding: 0,
    alignItems: 'center',
  },
  discardBtnText: {
    color: '#FE2B5E',
    fontSize: 15,
  },
  saveBtn: {
    borderColor: '#e5e5e5',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    width: 65,
  },
  saveBtnText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#274FED',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 29,
    letterSpacing: 0.1,
    marginVertical: 15,
  },
  subnavigation: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderColor: '#e5e5e5',
    borderWidth: 2,
    borderRadius: 5,
    height: 50,
    marginBottom: 20,
  },
  navbtn: {
    justifyContent: 'center',
    width: `${100 / 3}%`,
  },
  navbtnText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#222222',
    opacity: 0.5,
  },
  active: {
    backgroundColor: '#274FED',
    borderRadius: 5,
    padding: 15,
    color: '#FFF',
    opacity: 1,
  },
});

export default EditProfile;
