
import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppearanceProvider } from 'react-native-appearance';
import { AppLayout } from './src/AppLayout';

import { TrackProvider } from './src/context/TrackContext';

const Tab = createBottomTabNavigator();

import { StatusBar, Text, View } from 'react-native';

const App: React.FunctionComponent = () => {
    return (
        <AppearanceProvider>
            <TrackProvider>
                <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}><AppLayout/></View>
            </TrackProvider>
        </AppearanceProvider>
    );
};

export default App;
