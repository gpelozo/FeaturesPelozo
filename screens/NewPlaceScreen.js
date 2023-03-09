import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native'

import { useDispatch } from 'react-redux'
import ImageSelector from '../components/ImageSelector'
import LocationSelector from '../components/LocationSelector'
import { COLORS } from '../constants'
import { addPlace } from '../store/places.actions'

const NewPlaceScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")

    const handleTitleChange = text => setTitle(text)

    const handleSave = () => {
        dispatch(addPlace(title, image))
        navigation.navigate("Direcciones")
    }
    return (
        <ScrollView>
            <View>
                <Text style={styles.label}>Titulo</Text>
                <TextInput style={styles.input} onChangeText={handleTitleChange} />
                <ImageSelector onImage={(image) => console.log(image)} />
                <LocationSelector onLocation={location => console.log(location)}/>
                <Button
                title="Guardar direccion"
                color={COLORS.MAROON}
                onPress={handleSave}
                 />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    }
})

export default NewPlaceScreen
