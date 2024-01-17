import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
type carddetails = {
    id:number
    text: string,
    deletedetails:Function
}
const Card = (props: carddetails) => {
    return (
        <View style={styles.main}>
            <Text style={styles.cardtitle}>{props.text}</Text>
            <TouchableOpacity style={styles.deletebutton} onPress={()=>{
                props.deletedetails(props.id)
            }}>
                <Text style={styles.deletebuttontext}>x</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    main: {
        marginTop: 10,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginHorizontal: 10,
        paddingVertical: 8,
        position: "relative"
    },
    cardtitle: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18
    },
    deletebutton: {
        position: "absolute",
        right: 10

    },
    deletebuttontext: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    }

})