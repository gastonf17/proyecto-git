import React, { useState } from "react";
import  
{ 
 StyleSheet,
 Text,
 View,
 TextInput,
 Pressable, 
 Image, 
 FlatList,
 Modal,
 
 

 } from "react-native";
 import { Ionicons } from '@expo/vector-icons';
 import AddItem from "./src/AddItem";
 import ListItem from "./src/ListItem";


export default function App() {

  const initialState = [
  {id: 2, Text: "huevo"},
  {id: 3, Text: "leche"},


  ];

  const  [text , setText] = useState("");

  const  [list , setList] = useState(initialState);

  const  [isModalVisible , setIsModalVisible] = useState(false);

  
   
 
  
const addItem =()  => {
  list.push({
    id: Math.random(),
    text: text,
  
  });
  setList(list);
  setText("");
};

const clearList = () => {
  setList([]);
  setIsModalVisible(false);
};

  return (

 
    <View style={styles.contenedor}>

      <Modal transparent={true} visible={isModalVisible}
> 

        <View  style={styles.Modal} >
          <Text style={styles.textlista}>¿estas seguro que desea eliminar la lista?</Text>

          <View style={styles.buttonitem}>
          <Pressable onPress={() => clearList()}>
            <Text>SI</Text>
          </Pressable>

          <Pressable onPress={()=> setIsModalVisible(false)}>
            <Text>NO</Text>
          </Pressable>
          </View>

        </View>


      </Modal>
   
   <Image style={styles.imag}

   source={{uri: "https://www.vz-erfurt.de/fileadmin/_processed_/8/a/csm_Checkliste_a82cc2baad.png"}}
   
   
   /> 
  
      <Text style={styles.titulo}>lista de compra</Text>

      <AddItem text={text} setText={setText} addItem={addItem}/>



     
     <FlatList

      data={list}
     keyExtractor={(item)=> item.id}
     renderItem={({item}) => <ListItem item={item}/>}
      
     />
     <Pressable style={styles.button}
      onPress={() => setIsModalVisible(true)}>
      <Ionicons name="trash" size={35} color="violet" />
      
     </Pressable>


    </View>
    
    
  );
}

const styles = StyleSheet.create({
  contenedor: {
    alignItems: "center",
    justifyContent: "center",
  
  },

  titulo:{
    marginTop: 40,
    fontSize: 30,
    borderBottomColor: "violet",
    borderBottomWidth: 5,
  },
  
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
lis:{
  fontSize: 20,
  marginVertical: 2,

 },

 imag:{
  height: 90,
  width: 60,
  marginTop: 40,
},
Modal:{
  backgroundColor: "violet",
  height: 150,
  marginTop: 400,
  
  
},
textlista:{
  height: 40,
  padding: 10,
  marginLeft: 40,
  fontSize: 15,
},
buttonitem:{
  marginLeft: 190,
  flexDirection: "colum",

},

});