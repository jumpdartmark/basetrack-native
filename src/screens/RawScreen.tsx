import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationState } from '@react-navigation/native';
import { TrackContext } from '../context/TrackContext';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

interface Props {
    navigation: BottomTabBarProps<NavigationState>;
}

const RawScreen: React.FunctionComponent = () => {
    const pings = React.useContext(TrackContext);
    return (
        <Text>{JSON.stringify(pings)}</Text>
    );
};

export default RawScreen;
