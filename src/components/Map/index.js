import React, { Component, Fragment } from 'react';
import { View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';

import { getPixelSize } from '../../utils';

import Search from '../Search';
import Search2 from '../Search/index2';
import Directions from '../Directions';
import Directions2 from '../Directions/index2';
import Details from '../Details';

import markerImage from '../../assets/marker.png';
import backImage from '../../assets/back.png';

import {
    Back,
    LocationBox, 
    LocationText, 
    LocationTimeBox,
    LocationTimeText, 
    LocationTimeTextSmall 
} from './styles';

import {
    Back2,
    LocationBox2, 
    LocationText2, 
    LocationTimeBox2,
    LocationTimeText2, 
    LocationTimeTextSmall2 
} from './styles2';

Geocoder.init('AIzaSyDPaFRwkTfLGUgDovW6ZrldT9e77mYR7sU');

export default class Map extends Component {
    state = { 
        region: null,
        destination: null,
        destination2: null,
        duration: null,
        duration2: null,
        location: null,
        location2: null
    };

    async componentDidMount() {
        Geolocation.getCurrentPosition(
            async ({ coords: { latitude, longitude } }) => {
                const response = await Geocoder.from({ latitude, longitude });
                const addreess = response.results[0].formatted_address;
                const location = addreess.substring(0, addreess.indexOf(','));

                this.setState( { 
                    location,
                    region: {
                        latitude,
                        longitude,
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.0134
                } })
            }, //sucess

            () => {}, //error
            {
                timeout: 2000,
                enableHighAccuracy: false,
                maximumAge: 1000,
            }
        );
    }


    handleLocationSelected = (data, { geometry }) => {
        const { location: { lat: latitude, lng: longitude } } = geometry;
       
        this.setState({
            destination: {
                latitude,
                longitude,
                title: data.structured_formatting.main_text,
            },
        })
    };


    handleLocationSelected2 = (data, { geometry }) => {
        const { location: { lat: latitude, lng: longitude } } = geometry;

        this.setState({
            destination2: 
            {
                // latitude2: -24.706223
                // longitude2: -53.7744284,
                latitude,
                longitude,
                title: data.structured_formatting.main_text,
            },
        })
    };


    handleBack = () => {
        this.setState({ destination: null });
        this.setState({ destination2: null });
    }

  render() {
    const { region, destination, destination2, duration, duration2, location } = this.state;

    return (
        <View style={{ flex: 1 }}>
            <MapView 
                showsUserLocation
                style={{flex: 1}}
                region={ region }
                loadingEnabled
                ref={ el => this.mapView = el }
                
                >
                { destination && (
                    <Fragment>
                        <Directions
                            origin={region}
                            destination={destination}
                            onReady={result => {
                                this.setState({ duration: Math.floor(result.duration) });

                                this.mapView.fitToCoordinates(result.coordinates), {
                                    edgePadding: {
                                        right: getPixelSize(100),
                                        left: getPixelSize(100),
                                        top: getPixelSize(100),
                                        bottom: getPixelSize(450)
                                    }
                                };
                            }}
                        />
                        
                        <Marker coordinate={destination} 
                                anchor={{ x:0, y:0 }} 
                                image={markerImage}> 
                            <LocationBox>
                                <LocationText>{destination.title}</LocationText>
                            </LocationBox>
                        </Marker>

                        <Marker coordinate={region} 
                                anchor={{ x:0, y:0 }}
                                > 
                            <LocationBox>
                                <LocationTimeBox>
                                    <LocationTimeText>{duration}</LocationTimeText>
                                    <LocationTimeTextSmall>min</LocationTimeTextSmall>
                                </LocationTimeBox>
                                <LocationText>{location}</LocationText>
                            </LocationBox>
                        </Marker>
                    </Fragment>
                )}

                { destination2 && (
                    <Fragment>
                        <Directions2
                            origin={region}
                            destination={destination2}
                            onReady={result => {
                                this.setState({ duration2: Math.floor(result.duration) });

                                this.mapView.fitToCoordinates(result.coordinates), {
                                    edgePadding: {
                                        right: getPixelSize(100),
                                        left: getPixelSize(100),
                                        top: getPixelSize(100),
                                        bottom: getPixelSize(450)
                                    }
                                };
                            }}
                        />
                        
                        <Marker coordinate={destination2} 
                                anchor={{ x:0, y:0 }} 
                                image={markerImage}> 
                            <LocationBox2>
                                <LocationText2>{destination2.title}</LocationText2>
                            </LocationBox2>
                        </Marker>

                        <Marker coordinate={region} 
                                anchor={{ x:0, y:0 }}
                        > 
                            <LocationBox2>
                                <LocationTimeBox2>
                                    <LocationTimeText2>{duration2}</LocationTimeText2>
                                    <LocationTimeTextSmall2>min</LocationTimeTextSmall2>
                                </LocationTimeBox2>
                                <LocationText2>{   }</LocationText2>
                            </LocationBox2>
                        </Marker>     
                    </Fragment>
                )}

            </MapView>
            
            {destination || destination2 ? (
                <Fragment>
                    <Back onPress={ this.handleBack }>
                        <Image source={backImage} />
                    </Back>
                    <Details/>

                </Fragment> 

            ) :  (
                <Fragment>
                    <Search onLocationSelected={this.handleLocationSelected} />
                    <Search2 onLocationSelected={this.handleLocationSelected2} />
                </Fragment>
                )}
        </View> 
    );
  }
}

