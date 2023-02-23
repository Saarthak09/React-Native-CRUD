import React, { Component } from "react";
import { Button, View, Text, FlatList, StyleSheet } from "react-native";
import List from "./List";
import { useContext } from "react";
import { todoContext  } from "../contexts/todoContext";


export default function ListScreen({navigation}) {
  const [todoList, setTodoList]=useContext(todoContext)

  console.log(todoList)
  const deleteTodo= async(id)=>{
    const newTodo=todoList.filter(item=>item.id!=id);
    setTodoList(newTodo)
  }

  const updateTodo=(id)=>{
    const newTodos =todoList.map(item=>{
      if(item.id==id)
      
      { 

        if(textInputName!='')
        item.task=textInputTask
    
        if(textInputAge!='')
        item.day=textInputDay            
      }
      return item;
    })}

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.txt}>Todos</Text>
      <Text style={styles.txt}>CRUD App</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 20, paddingBottom: 100}}
        data={todoList}
        renderItem={({item}) => <List todo={item} deleteTodo={deleteTodo} updateTodo={updateTodo}/>}
      />
    </View>
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
