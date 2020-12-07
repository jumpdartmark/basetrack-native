import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationState } from '@react-navigation/native';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

interface Props {
    navigation: BottomTabBarProps<NavigationState>;
}

class RawScreen extends React.Component<Props> {
    public static navigationOptions = {
        title: 'Test Screen',
    };

    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Text>Raw Screen</Text>
            </View>
        );
    }
}

export default RawScreen;
