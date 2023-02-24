import React, { Component, useEffect } from "react";
import { TouchableOpacity } from 'react-native';
import {  SafeAreaView,StyleSheet, View,Text,TextInput,FlatList,Alert,Button} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState, useContext } from "react";
import { todoContext  } from "../contexts/todoContext";
import * as RootNavigation from '../rootNavigation';
import ListScreen from "./ListScreen";



const COLORS={primary:'#1f145c',white:'#fff',black:'#000000',Green:'#00FF00',red:'#FF0000'};


export default function UpdateItem({navigation,route}) {
    const [todoList, setTodoList]=useContext(todoContext)
    const [textInput, setTextInput]=useState()
    const [day,setDay]=useState()
    useEffect(()=>{
        updateTodo(route.params.id)
      },[todoList])
   
    const updateTodo=(id)=>{
    const newTodos =todoList.map(item=>{
            id=route.params.id
          if(item.id==id)
          
          { 
    
            if(textInput!='')
            item.task=textInput
        
            if(day!='')
            item.day=day            
          }
          return item;
        })
    
        setTodoList[newTodos]
    }
  
    const nav=()=>{
        RootNavigation.navigate('ListScreen')
    }
   
    return (
      <SafeAreaView   style={{flex:1,backgroundColor:COLORS.white}}>
        <View >
            <View>
                <TouchableOpacity > 
                {/* <TouchableOpacity  onPress={() => navigation.navigate('ItemDetails',{ todoId:todo.id,todoName:todo.Name,todoAge:todo.Age,todoDescription:todo.Description })}>  */}
                    <Text style={{fontWeight:'bold', fontSize:15, color:COLORS.primary}} >Task: {route.params.task}   </Text>
                    
                    <Text style={{fontWeight:'bold', fontSize:15, color:COLORS.primary}}>Day: {route.params.day} </Text>

                </TouchableOpacity>
            </View>
        </View>
        
      <View >
      <View >
      
        <TextInput style={styles.text} value={textInput} placeholder="Update Task" onChangeText={text=>setTextInput(text)} />
        <TextInput style={styles.text} placeholder="Update day"   value={day} onChangeText={text=>setDay(text)}/>
      </View>
      <TouchableOpacity>
        <View >
        <Button
        title="Update"
        onPress={updateTodo}
        />
        </View>
       </TouchableOpacity>
       </View>
       </SafeAreaView>
    );
  }
  


  const styles=StyleSheet.style={
    text:{
        color: "#000000"
    }
  }