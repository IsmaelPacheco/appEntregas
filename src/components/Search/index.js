import React, { Component } from 'react';
import { Platform } from 'react-native';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default class Search extends Component {
  state = {
    searchFocused: false
  };

  render() {
    const { searchFocused } = this.state;
    const { onLocationSelected } = this.props;

    return ( 
      <GooglePlacesAutocomplete
        placeholder="Endereço de entrega 01"
        placeholderTextColor="#333"
        onPress={onLocationSelected}
        query={{
            key: "AIzaSyDPaFRwkTfLGUgDovW6ZrldT9e77mYR7sU",
            language: 'pt'
          }}
        textInputProps={{
          onFocus: () => {
            this.setState({ searchFocused: true });
          },
          onBlur: () => {
            this.setState({ searchFocused: false });
          },
          autoCapitalize: "none",
          autoCorrect: false
        }}
        listViewDisplayed={searchFocused}
        fetchDetails
        enablePoweredByContainer={false}
        styles={{
          container: {
            position: 'absolute',
            top: Platform.select({ ios: 60, android: 40 }),
            width: '90%',
            marginLeft: '5%', 
          },
          TextInputContainer: {
            flex: 1,
            backgroundColor: 'transparent',
            height: 45,
            marginHorizontal: 25,
            borderTopWidth: 0,
            borderBottomWidth: 0
          },
          textInput: {
            backgroundColor: "#bfe2ca",
            height: 45,
            margin: 0,
            borderRadius: 10,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: -1,
            marginLeft: -7,
            marginRight: -7,
            elevation: 15,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowOffset: { x: 0, y: 0 },
            shadowRadius: 15,
            borderWidth: 1,
            borderColor: "#111",
            fontSize: 18
          },
          listView: {
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "#DDD",
            backgroundColor: "#FFF",
            marginHorizontal: 5,
            elevation: 5,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowOffset: { x: 0, y: 0 },
            shadowRadius: 15,
            marginTop: 5
          },
          description: {
            fontSize: 16
          },
          row: {
            padding: 15,
            height: 50
          }
        }}
      />
    );
  }
}


   
