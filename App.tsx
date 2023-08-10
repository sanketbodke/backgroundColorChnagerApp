import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'

export default function App() {

  const [backgroundColor, setBackgroundColor] = useState("#ffffff")
  const [boxColor, setBoxColor] = useState("#ffffff")

  const generateColor = ()=>{
    const hexRange = "0123456789ABCDEF"
    let color = "#"

    for(let i= 0;i < 6;i++){
      color +=hexRange[Math.floor(Math.random() * 16)]
    }
    setBackgroundColor(color)
  }

  return (
   <>
   <StatusBar backgroundColor={backgroundColor} />
   <View style={[styles.container, {backgroundColor: backgroundColor}]}>
    <TouchableOpacity onPress={generateColor}>
      <View style={styles.actionBtn}>
        <Text style={styles.actionBtnText}>Press Me</Text>
      </View>
      <View style={[styles.box1, {backgroundColor: boxColor}]}>

      </View>
      <View style={[styles.box2, {backgroundColor: boxColor}]}>

      </View>
      <View style={[styles.box3, {backgroundColor: boxColor}]}>

      </View>
      <View style={[styles.box4, {backgroundColor: boxColor}]}>
   
      </View>
    </TouchableOpacity>
   </View>
   </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  actionBtn:{
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    padding: 13,
    position: "relative"
  },

  actionBtnText:{
    color: "#FFF",
    fontSize: 18,
    textTransform: "uppercase"
  },

  box1:{
    position: "absolute",
    top: 250,
    height: 70,
    width: 100,
    // backgroundColor: "maroon"
  },

  box2:{
    position: "absolute",
    top: -250,
    height: 70,
    width: 100,
    borderRadius: 20,
    // backgroundColor: "blue"
  },

  box3:{
    position: "absolute",
    top: 110,
    height: 100,
    width: 100,
    borderRadius: 50,
    // backgroundColor: "pink"
  },

  box4:{
    position: "absolute",
    top: -150,
    height: 70,
    width: 100,
    borderRadius: 50,
    // backgroundColor: "yellow"
  }
})