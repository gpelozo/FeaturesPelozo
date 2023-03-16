import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import * as Location from "expo-location"
import { COLORS } from "../constants/Colors"
import MapPreview from './MapPreview'

const LocationSelector = () => {
    const navigation = useNavigation()
    const [pickedLocation, setPickedLocation] = useState("")

    const verifyPermissions = async () => {

        const {status} = await Location.requestForegroundPermissionsAsync()

        if (status !== "granted") {
            Alert.alert("Permisos insuficientes",
            "Necesita dar permisos de la ubicacion para usar la aplicacion", [{text: "ok"}]
            )
            return false
        }
        return true
    }

    const handleGetLocation = async () => {
        const isLocationOk = await verifyPermissions()
        if (!isLocationOk) return
        const location = await Location.getCurrentPositionAsync({
            timeout: 5000,
        })

        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        })
        props.onLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        })
    }

    const HandlePickOnMap = () => {
        const isLocationOK = verifyPermissions()
    }
    
  return (
    <View style={styles.container}>
      <MapPreview location={pickedLocation}>
        <Text>Ubicacion en progreso...</Text>
      </MapPreview>
      <Button
      title="Obtener Ubicacion"
      color={COLORS.PEACH_PUFF}
      onPress={handleGetLocation} 
      />
      <Button
      title="Elegir del mapa"
      color={COLORS.LIGHT_PINK}
      onPress={HandlePickOnMap} 
      />
    </View>
  )
}

export default LocationSelector

const styles = StyleSheet.create({
    container: {
        marginButton: 10,
    },
    preview: {
        width: "100%",
        height: 200,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: COLORS.BLUSH,
        borderWidth: 1,
    },
    image: {
        width: "100%",
        height: "100%",
    },
})