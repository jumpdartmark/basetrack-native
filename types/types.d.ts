/**
 * Type representing the location object.
 */

declare interface LocPing {
    coords:{
        latitude:number; // The latitude in degrees.
        longitude:number; // The longitude in degrees.
        altitude:number | null; // The altitude in meters above the WGS 84 reference ellipsoid.
        accuracy:number | null; // The radius of uncertainty for the location, measured in meters.
        altitudeAccuracy:number | null; // The accuracy of the altitude value, in meters. Can be null on Web if it's not available.
        heading:number | null; // Horizontal direction of travel of this device. North == 0, East == 90 degrees, South == 180.
        speed:number | null; // The instantaneous speed of the device in meters per second. Can be null on Web if it's not available.
    };
    timestamp:number; // The time at which this position information was obtained, in milliseconds since epoch.
}
