import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FormView from './components/FormView';
import EditProfile from './components/EditProfile';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <SafeAreaView style={styles.appContainer}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Form" component={FormView} />
            <Stack.Screen name="Profile" component={EditProfile} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    flex: 1,
  },
});

export default App;
