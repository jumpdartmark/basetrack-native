import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function TrackHistoryScreen() {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HistoryScreen</Text>
      </View>
  );
}
function CurrentTrackScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen xx</Text>
        </View>
    );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <>
          <NavigationContainer>
              <Tab.Navigator>
                  <Tab.Screen name="History" component={TrackHistoryScreen} />
                  <Tab.Screen name="Current" component={CurrentTrackScreen} />
              </Tab.Navigator>
          </NavigationContainer>
      </>
  );
}
