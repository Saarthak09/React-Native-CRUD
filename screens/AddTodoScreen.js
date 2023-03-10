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
