import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import MapView, { Marker } from "react-native-maps"
import Ionicons from "@expo/vector-icons/Ionicons"

const MapScreen = () => {
    const [selectedLocation, setSelectedLocation] = useState()
    const handleSelectedLocation = (event) => {
        setSelectedLocation({
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude,
        })
    }
    const handleSaveLocation = () => {
        navigation.navigate("Nuevo", {
            mapLocation: {
                lat: 0.06587304174900055,
                lng: 52.24742074398264,
            },
        })
    }

    const initialRegion = {
        latitude: 37.4219023,
        longitude: -122.0839984,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
    return(
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
    )
}

useLayoutEffect(() => {
    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity onPress={handleSaveLocation}>
                <Ionicons name="md-save-outline" color="black" size={22} />
            </TouchableOpacity>
        )
    })
}, [] )

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default MapScreen
