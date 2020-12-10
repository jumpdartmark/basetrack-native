import * as React from 'react';
import { Text, ScrollView } from 'react-native';
import { NavigationState } from '@react-navigation/native';
import { useTrack } from '../context/TrackContext';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

interface Props {
    navigation: BottomTabBarProps<NavigationState>;
}

const RawScreen: React.FunctionComponent = () => {
    const currentTrack = useTrack();
    // TODO: make this a table or something nicer to look at to see all LocPing records
    return (
        <ScrollView>
            <Text>{JSON.stringify(currentTrack.pings, null, 1)}</Text>
        </ScrollView>
    );
};

export default RawScreen;
