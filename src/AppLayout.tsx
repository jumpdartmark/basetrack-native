
import * as React from 'react';
import { Text, View, Platform, StatusBar } from 'react-native';

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RawScreen from './screens/RawScreen';
import SummaryScreen from './screens/SummaryScreen';
import StatusScreen from './screens/StatusScreen';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const AppLayout: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Raw" component={RawScreen} options={
                {
                    tabBarIcon: ({ focused, color }) => {
                        const iconName = `file-document-box${focused ? '' : '-outline'}`;
                        return <MaterialCommunityIcons name={iconName} size={25} color={color} />;
                    },
                }
                } />
                <Tab.Screen name="Summary" component={SummaryScreen} options={
                {
                    tabBarIcon: ({ focused, color }) => {
                        const iconName = `card-bulleted-settings${focused ? '' : '-outline'}`;
                        return <MaterialCommunityIcons name={iconName} size={24} color={color} />;
                    },
                }
                } />
                <Tab.Screen name="Status" component={StatusScreen} options={
                {
                    tabBarIcon: ({ focused, color }) => {
                        const iconName = `settings${focused ? '' : '-outline'}`;
                        return <MaterialCommunityIcons name={iconName} size={24} color={color} />;
                    },
                }
                } />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
