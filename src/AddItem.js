import {View,Text,StyleSheet,TextInput,Pressable } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';


const AddItem = ({text, setText, addItem}) => {
    return (
        <View style={styles.buttonContainer}>
        

      <View style={styles.inputContainer}>

      <TextInput
      placeholder="escriba aqui.."
      style={styles.input}
      value={text}
      onChangeText={(value) => setText(value)}
      />

      </View>

      <Pressable style={styles.button} onPress={() => addItem()}>
      <Ionicons name="ios-add-circle-outline" size={33} color="violet" />
     </Pressable>
     </View>

        
       );
};

const styles = StyleSheet.create({
    input: {
    
        padding: 10,
        fontSize: 20,
        width: 150,
    
      },
      inputContainer: {
        marginTop: 20,
        bordeColor:"violet",
        borederWidth: 1,
    
      },  
      buttonContainer:{
        flexDirection: "row",
        alignItems: "center",
      },
      button:{
        marginTop: 15,
        marginLeft: 15,
      },



});
export default AddItem;