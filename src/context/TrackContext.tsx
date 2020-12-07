import * as React from 'react';

interface LocPing {
    lat: string;
    long: string;
}

export interface TrackContextData {
    pings: LocPing[];
}

export const trackContextDefaultValue: TrackContextData = {
    pings: [],
};

export const TrackContext = React.createContext<TrackContextData>(trackContextDefaultValue);
