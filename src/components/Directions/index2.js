import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions2 = ({destination, origin, onReady }) => (
    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey="AIzaSyDPaFRwkTfLGUgDovW6ZrldT9e77mYR7sU"
        strokeWidth={5}
        strokeColor="#ac101d"
    />
);

export default Directions2;
