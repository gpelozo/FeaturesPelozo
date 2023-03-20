import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import API_KEY from "../constants/Map"

const MapPreview = ({location, style, children}) => {
    const MapPreview = location ? `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=${API_KEY}&signature=YOUR_SIGNATURE`
    : ""

  return (
    <View style={{ ...styles.mapPreview, ...style}}>
      {location ? ( <Image style={styles.mapImage} source={{uri: MapPreview}} />
  ):(
    children
  )}
    </View>
  )
}

export default MapPreview

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: "center",
    alignItems: "center"
  },
  mapImage: {
    width: "100%",
    height: "100%"
  }
})