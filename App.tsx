
import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppearanceProvider } from 'react-native-appearance';
import { AppLayout } from './src/AppLayout';
import { TrackContext } from './src/context/TrackContext';

const Tab = createBottomTabNavigator();

import { StatusBar, View } from 'react-native';
export default class App extends React.Component {
    render() {
        return (
            <AppearanceProvider>
                <TrackContext.Provider value={ { pings: [{ lat:'14.2345.3456', long:'75.3456.4567' }] } }>
                    <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}><AppLayout/></View>
                </TrackContext.Provider>
            </AppearanceProvider>
        );
    }
}
