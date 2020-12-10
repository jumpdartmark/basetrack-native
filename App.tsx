
import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppearanceProvider } from 'react-native-appearance';
import { AppLayout } from './src/AppLayout';

import { TrackProvider } from './src/context/TrackContext';

const Tab = createBottomTabNavigator();

import { StatusBar, StyleSheet, View, Platform } from 'react-native';

const App: React.FunctionComponent = () => {
    return (
        <AppearanceProvider>
            <TrackProvider>
                <View style={styles.appStyle}>
                    <StatusBar barStyle={"light-content"}/>
                    <View style={styles.appContentStyle}>
                        <AppLayout/>
                    </View>
                </View>
            </TrackProvider>
        </AppearanceProvider>
    );
};

const styles = StyleSheet.create({
    appStyle: {
        backgroundColor: 'black',
        color: 'white',
        flex:1,
    },
    appContentStyle: {
        flex:1,
        marginTop: (Platform.OS === 'ios') ? 18 : StatusBar.currentHeight,
        backgroundColor: 'white',
        color: 'black',
    },
})


export default App;
