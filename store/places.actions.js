import * as FileSystem from "expo-file-system"
import Map from "../constants/Map"

export const ADD_PLACE = 'ADD_PLACE'


export const addPlace = (title, image, location) => {
    //return { type: ADD_PLACE, payload: {title}}
    return async dispatch => {
        const response = await fetch(
            ``
        )
        if(!response.ok) {
            throw new Error(
                "No se ha podido comunicar con Google Maps API"
            )
        }

        const resData = await response.json()

        if(!resData.resultas) {
            throw new Error(
                "No se han encontrado datos para las coordenadas seleccionadas"
            )
        }

        const address = resData.results[0].formated_address

        const fileName = image.split("/").pop()
        const Path = FileSystem.documentDirectory + fileName

        try {
            FileSystem.moveAsync({
                from: image,
                to: Path
            })
        } catch (err) {
            console.log(err.message)
            throw err
        }

        dispatch({
            type: ADD_PLACE,
            payload: {title, image: Path, lat : location.lat, lng: location.lng } })
    }
}