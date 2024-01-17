import { View, Text, StyleSheet, Dimensions, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
const vw = Dimensions.get("screen").width;
const vh = Dimensions.get("screen").height;

type appbarprops={
    textDetails:Function;
}
const Appbar = (props:appbarprops) => {
    const [task, settask] = useState("");
    return (
        <View style={styles.main}>
            <Text style={styles.appname}>To Do List</Text>
            <TextInput style={styles.textbox} value={task} onChangeText={(e) => settask(e)}></TextInput>
            <TouchableOpacity onPress={()=>{
                props.textDetails(task);
                settask("")
            }}>
                <View style={styles.addbutton}>
                    <Text style={styles.buttontext}>+ Add Task</Text>
                </View></TouchableOpacity>
        </View>
    )
}

export default Appbar

const styles = StyleSheet.create(
    {
        main: {
            width: vw,
            backgroundColor: "blue",
            height: vh * 0.08,
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingHorizontal: 5,
            flexDirection: "row"
        },
        appname: {
            color: "white",
            fontWeight: "bold",
            fontSize: 18
        },
        textbox: {
            width: vw * 0.5,
            backgroundColor: "white",
            height: vh * 0.04,
            borderRadius: 5,
            fontSize: 15,


        },
        addbutton: {
            width: vw * 0.2,
            backgroundColor: "#4477CE",
            height: vh * 0.04,
            alignItems: "center",
            justifyContent: "center",
            borderRadius:5
        },
        buttontext: {
            color: "white",
            fontSize: 15,
            fontWeight: "bold",
            
        }
    }
)