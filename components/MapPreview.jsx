import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import API_KEY from "../constants/Map"

const MapPreview = ({location, style, children}) => {
    const MapPreview = location ? `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7C${location.lat},${location.lng}&key=${API_KEY}`
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