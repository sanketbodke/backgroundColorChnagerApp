import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'

export default function App() {

  const [backgroundColor, setBackgroundColor] = useState("#ffffff")

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
  },

  actionBtnText:{
    color: "#FFF",
    fontSize: 18,
    textTransform: "uppercase"
  }
})