import React, { Component } from "react";
import { Alert, Button, View, Text, StyleSheet, SafeAreaView, TextInput} from "react-native";
import List from "./List";
import { useContext } from "react";
import { todoContext  } from "../contexts/todoContext";
import { useState } from "react";
import uuid from 'react-native-uuid';



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
      <Text style={styles.txt}>CRUD App</Text>
      {/* <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 20, paddingBottom: 100}}
        data={todoList}
        renderItem={({item}) => <List todo={item} deleteTodo={deleteTodo}/>}
      /> */}
      <TextInput style={styles.txt} placeholder="Enter Task" value={textInput} onChangeText={text=>setTextInput(text)}/>
      <TextInput style={styles.txt} placeholder="Enter Day" value={day} onChangeText={text=>setDay(text)}/>

      <Button
        title="Add"
        onPress={addTodo}
      />
    </View>
    </SafeAreaView>
  );
}


const styles=StyleSheet.create({
    container:{
      padding: 20,
      color:"#000000",
    //   flex: 1, 
      alignItems: "center", 
      justifyContent: "center"
    },
    txt:{
        color:"#000000",
        placeholderTextColor:"#000000"
    }

  })
