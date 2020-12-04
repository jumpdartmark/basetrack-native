import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RawScreen from "./src/screens/RawScreen";
import SummaryScreen from "./src/screens/SummaryScreen";
import StatusScreen from "./src/screens/StatusScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen name="Raw" component={RawScreen} />
              <Tab.Screen name="Summary" component={SummaryScreen} />
              <Tab.Screen name="Status" component={StatusScreen} />
          </Tab.Navigator>
      </NavigationContainer>
  );
}
