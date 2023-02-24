import React, { Component } from "react";
import { Alert, Button, View, Text, StyleSheet, SafeAreaView, TextInput} from "react-native";
import List from "../components/List";
import { useContext } from "react";
import { todoContext  } from "../contexts/todoContext";
import { useState } from "react";
import uuid from 'react-native-uuid';
import {styles} from "../styles"


export default function ListScreen() {
  const [todoList, setTodoList]=useContext(todoContext)
  const [textInput, setTextInput]=useState('')
  const [day,setDay]=useState('')

  console.log(todoList)
  const addTodo=()=>{
    if(textInput=="" || day==""){
      Alert.alert("Error","please enter all fields")
    }
    else{
      console.log(textInput)
      const newTodo={
        id:uuid.v4(),
        task:textInput,
        day:day,
        completed:false,
      };
      setTextInput('')
      setDay('')
      setTodoList([...todoList, newTodo])
      }
  }

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.header}>CRUD App</Text>
      <View style={styles.textInput}>
      <TextInput style={styles.input} placeholder="Enter Task" value={textInput} onChangeText={text=>setTextInput(text)}/>
      <TextInput style={styles.input} placeholder="Enter Day" value={day} onChangeText={text=>setDay(text)}/>
        </View>
      <Button
        title="Add"
        onPress={addTodo}
      />
    </View>
    </SafeAreaView>
  );
}


// const styles=StyleSheet.create({
//     container:{
//       padding: 20,
//       color:"#000000",
//     //   flex: 1, 
//       alignItems: "center", 
//       justifyContent: "center"
//     },
//     txt:{
//         color:"#000000",
//         // placeholderTextColor:"#000000"
//     },
//     header:{
//         fontSize:16,
//         color:"#000000",
//     },
//     input: {
//         height: 40,
//         margin: 12,
//         borderWidth: 1,
//         borderRadius: 10,
//         padding: 10,
//         color:"#000000"
//     }
//   })
