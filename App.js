import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FormView from './components/FormView';
import EditProfile from './components/EditProfile';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.appContainer}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Form" component={FormView} />
            <Stack.Screen name="Profile" component={EditProfile} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 15,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    flex: 1,
  },
});

export default App;
