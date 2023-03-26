import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Ionicons from "@expo/vector-icons/Ionicons";


const MapScreen = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState();

  const initialRegion = {
    latitude: 58.48952735259595,
    longitude: -34.62255112718561,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handleSelectedLocation = event => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  const handleSaveLocation = () => {
    if(selectedLocation){
    navigation.navigate("Nuevo", {
      mapLocation: selectedLocation})
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleSaveLocation}>
          <Ionicons name="md-save-outline" color="black" size={25} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, handleSaveLocation]);

  return (
    <MapView
      provider="google"
      initialRegion={initialRegion}
      style={styles.container}
      onPress={handleSelectedLocation}
    >
      {selectedLocation && (
        <Marker
          title="Ubicacion seleccionada"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;