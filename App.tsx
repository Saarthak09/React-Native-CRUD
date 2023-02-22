import React, {useEffect, useState} from 'react'
import {Alert,View, Text,TextInput, StyleSheet, SafeAreaView, Button, FlatList, } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import List from './components/List'
import uuid from 'react-native-uuid';


const App=()=>{
  const [textInput, setTextInput]=useState('')
  const [day,setDay]=useState('')
  const [todo, setTodo]=useState([[] as any])

  useEffect(()=>{
    saveTodo(todo)
  },[todo])
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
        setTodo(todos);
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
      setTodo([...todo, newTodo])
      }
  }


  const deleteTodo= async(id:any)=>{
    const newTodo=todo.filter(item=>item.id!=id);
    setTodo(newTodo)
  }

  return(
    <SafeAreaView>
    <View style={styles.container}>
      <Text>CRUD App</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 20, paddingBottom: 100}}
        data={todo}
        renderItem={({item}) => <List todo={item} deleteTodo={deleteTodo}/>}
      />
      <TextInput placeholder="Enter Task" value={textInput} onChangeText={text=>setTextInput(text)}/>
      <TextInput placeholder="Enter Day" value={day} onChangeText={text=>setDay(text)}/>

      <Button
        title="Add"
        onPress={addTodo}
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

export default App