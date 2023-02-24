import React, { Component, useEffect } from "react";
import { TouchableOpacity } from 'react-native';
import {  SafeAreaView,StyleSheet, View,Text,TextInput,FlatList,Alert,Button} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState, useContext } from "react";
import { todoContext  } from "../contexts/todoContext";
import * as RootNavigation from '../rootNavigation';
import ListScreen from "./ListScreen";
import {styles} from "../styles"



const COLORS={primary:'#1f145c',white:'#fff',black:'#000000',Green:'#00FF00',red:'#FF0000'};


export default function UpdateItem({navigation,route}) {
    const [todoList, setTodoList]=useContext(todoContext)
    const [textInput, setTextInput]=useState()
    const [day,setDay]=useState()
    useEffect(()=>{
        updateTodo(route.params.id)
      },[todoList])
   
    const updateTodo=(id)=>{
      if(textInput=="" || day==""){
        Alert.alert("Error","please enter all fields")
      }
      else{
        
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
    }
  
    const nav=()=>{
        RootNavigation.navigate('HomeScreen')
    }

    const func=()=>{
      nav()
      updateTodo()
    }
   
    return (
      <SafeAreaView   style={{flex:1,backgroundColor:COLORS.white}}>
        <View >
            <View>
                <TouchableOpacity > 
                    <Text style={styles.tasks} >Task: {route.params.task}   </Text>
                    <Text style={styles.tasks}>Day: {route.params.day} </Text>

                </TouchableOpacity>
            </View>
        </View>
        
      <View >
      <View >
      
        <TextInput style={styles.input} value={textInput} placeholder="Update Task" onChangeText={text=>setTextInput(text)} />
        <TextInput style={styles.input} placeholder="Update day"   value={day} onChangeText={text=>setDay(text)}/>
      </View>
      <TouchableOpacity>
        <View >
        <Button
        title="Update"
        onPress={()=>{
          updateTodo()
          RootNavigation.navigate('HomeScreen')
        }}
        />
        </View>
       </TouchableOpacity>
       </View>
       </SafeAreaView>
    );
  }
  