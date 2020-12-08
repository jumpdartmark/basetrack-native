import * as React from 'react';
import { useInterval } from '../hooks/useInterval.js';
import * as Location from 'expo-location';

interface TrackContextData {
    pings: LocPing[];
    isRecordingLocation: boolean;
    clearTrack: () => void;
    startRecording: () => void;
    stopRecording: () => void;
}

const notReady = () => {
    // tslint:disable-next-line:no-console
    console.warn('TrackContext being used without provider');
};

const trackContextDefaultValue: TrackContextData = {
    pings: [],
    isRecordingLocation: false,
    clearTrack: notReady,
    startRecording: notReady,
    stopRecording: notReady,
};

const TrackContext = React.createContext<TrackContextData>(trackContextDefaultValue);

const TrackProvider: React.FunctionComponent = ({ children }) => {
    const [pings, setPings] = React.useState<LocPing[]>([]);
    const [isRecordingLocation, setIsRecordingLocation] = React.useState<boolean>(true);

    useInterval(async () => {
        if (isRecordingLocation) {
            const { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                // tslint:disable-next-line:no-console
                console.error('Permission to access location was denied');
            }

            const location = await Location.getCurrentPositionAsync({});
            const newData = [...pings, { ...location }];
            setPings(newData);
        }
    },          5000);

    const trackApi = {
        pings,
        isRecordingLocation,
        stopRecording:() => { setIsRecordingLocation(false); },
        startRecording:() => { setIsRecordingLocation(true); },
        clearTrack:() => { setPings([]); },
    };

    return (
        <TrackContext.Provider value={trackApi}>
            {children}
        </TrackContext.Provider>
    );
};

const useTrack = () => React.useContext(TrackContext);

export { TrackProvider, useTrack };
