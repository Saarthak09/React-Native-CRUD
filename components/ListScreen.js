import React, { Component } from "react";
import { Button, View, Text, FlatList, StyleSheet } from "react-native";
import styles from '../styles'
import List from "./List";
import { useContext, useEffect } from "react";
import { todoContext  } from "../contexts/todoContext";


export default function ListScreen({navigation}) {
  const [todoList, setTodoList]=useContext(todoContext)
  // useEffect(()=>{
  //   saveTodo(todoList)
  // },[todoList])
  console.log(todoList)
  const deleteTodo= async(id)=>{
    const newTodo=todoList.filter(item=>item.id!=id);
    setTodoList(newTodo)
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.txt}>Todos</Text>
      <Text style={styles.txt}>CRUD App</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 20, paddingBottom: 100}}
        data={todoList}
        renderItem={({item}) => <List todo={item} deleteTodo={deleteTodo}/>}
      />
    </View>
  );
}


