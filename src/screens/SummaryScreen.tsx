import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationState } from '@react-navigation/native';
import { useTrack } from '../context/TrackContext';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

interface Props {
    navigation: BottomTabBarProps<NavigationState>;
}

const SummaryScreen: React.FunctionComponent = () => {
    const currentTrack = useTrack();
    // TODO: make a nice form for this data
    return (
        <Text>{JSON.stringify(currentTrack.locSummary, null, 1)}</Text>
    );
};

export default SummaryScreen;
