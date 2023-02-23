import React, {useEffect, useState} from 'react'
import { useContext } from 'react';
import {Alert,View, Text,TextInput, StyleSheet, SafeAreaView, Button, FlatList, } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import List from '../components/List'
import uuid from 'react-native-uuid';
import {todoContext} from '../contexts/todoContext';


const Home=({navigation}: {navigation: any})=>{
  const [textInput, setTextInput]=useState('')
  const [day,setDay]=useState('')
  // const [todo, setTodo]=useState([[] as any])
  const [todoList, setTodoList]=useContext(todoContext)


  useEffect(()=>{
    saveTodo(todoList)
  },[todoList])
  useEffect(()=>{
    getTodo()
  },[])

  const saveTodo=async (todo:any)=>{
    try{
      const stringyfyTodo=JSON.stringify(todo);
      await AsyncStorage.setItem('todo',stringyfyTodo)  
    }
    catch(e){
      console.log(e);
    }
  }

  const getTodo=async()=>{
    try{
      const savedTodo=await AsyncStorage.getItem('todo')

      if(savedTodo!=null){
        const todos=JSON.parse(savedTodo || "{}");
        setTodoList(todos);
      }
    }
    catch(e){
      console.log(e);
    }
    
  }

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


  const deleteTodo= async(id:any)=>{
    const newTodo=todoList.filter(item=>item.id!=id);
    setTodoList(newTodo)
  }

  return(
    <SafeAreaView>
    <View style={styles.container}>
      <Text>CRUD App</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 20, paddingBottom: 100}}
        data={todoList}
        renderItem={({item}) => <List todo={item} deleteTodo={deleteTodo}/>}
      />
      <TextInput placeholder="Enter Task" value={textInput} onChangeText={text=>setTextInput(text)}/>
      <TextInput placeholder="Enter Day" value={day} onChangeText={text=>setDay(text)}/>

      <Button
        title="Add"
        onPress={addTodo}
      />
      <Button
        title="Todos"
        onPress={()=>navigation.navigate('ListScreen')}
      />
    </View>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  container:{
    padding: 20
  }
})

export default Home