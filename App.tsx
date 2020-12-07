
import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppearanceProvider } from 'react-native-appearance';
import { AppLayout } from './src/AppLayout';

const Tab = createBottomTabNavigator();

import { StatusBar } from 'react-native';
StatusBar.setBarStyle('dark-content', true);

export default class App extends React.Component {
    render() {
        return (
            <AppearanceProvider>
                <AppLayout/>
            </AppearanceProvider>
        );
    }
}
