
import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppearanceProvider } from 'react-native-appearance';
import { AppLayout } from './src/AppLayout';

const Tab = createBottomTabNavigator();

import { StatusBar, View } from 'react-native';
export default class App extends React.Component {
    render() {
        return (
            <AppearanceProvider>
                <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}><AppLayout/></View>
            </AppearanceProvider>
        );
    }
}
