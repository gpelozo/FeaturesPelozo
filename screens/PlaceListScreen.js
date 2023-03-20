import React, { useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import PlaceItem from '../components/PlaceItem'
import * as addressAction from "../store/places.actions"

const PlaceListScreen = ({navigation}) => {
    const places = useSelector(state => state.places.places)

    useEffect(() => {
        console.log(places)
    }, [places])

    useEffect(() => {
        dispatchEvent(addressAction.loadAddress())
    }, [])

    const renderItem = ({item}) => (
        <PlaceItem
        title={item.title}
        image={item.image} 
        address={item.address} onSelect={() => navigation.navigate("Detalle", { placeId: item.id})} 
        />
    )
    
    return (
        <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default PlaceListScreen
