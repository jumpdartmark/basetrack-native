import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationState } from '@react-navigation/native';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

interface Props {
    navigation: BottomTabBarProps<NavigationState>;
}

class StatusScreen extends React.Component<Props> {
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Text>Status Screen</Text>
            </View>
        );
    }
}

export default StatusScreen;
