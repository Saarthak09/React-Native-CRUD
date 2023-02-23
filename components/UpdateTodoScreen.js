import React, { Component } from "react";
import { TouchableOpacity } from 'react-native';
import {  SafeAreaView,StyleSheet, View,Text,TextInput,FlatList,Alert,Button} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function UpdateItem({navigation,route}) {
    // const[todos,setTodos]=React.useState([[] 
    // ]);
    const [textInputName, setTextInputName] = React.useState('');
    const [textInputAge, setTextInputAge] = React.useState('');
    const [textInputDescription, setTextInputDescription] = React.useState('');
    
   
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
      <SafeAreaView   style={{flex:1,backgroundColor:COLORS.white}}>
        <View style={styles.listitem}>
            <View style={{flex:1}}>
                <TouchableOpacity > 
                {/* <TouchableOpacity  onPress={() => navigation.navigate('ItemDetails',{ todoId:todo.id,todoName:todo.Name,todoAge:todo.Age,todoDescription:todo.Description })}>  */}
                    <Text style={{fontWeight:'bold', fontSize:15, color:COLORS.primary}} >Task: {route.params.task}   </Text>
                    
                    <Text style={{fontWeight:'bold', fontSize:15, color:COLORS.primary}}>Day: {route.params.day} </Text>

                </TouchableOpacity>
            </View>
        </View>
        
      <View style={styles.footer}>
      <View style={styles.inputContainer}>
      
        <TextInput placeholderTextColor={COLORS.white} 
        value={textInputName}
        placeholder="Update Name" onChangeText={text=>setTextInputName(text)} />
        <TextInput placeholderTextColor={COLORS.white} placeholder="Update Age"   value={textInputAge} onChangeText={text=>setTextInputAge(text)}/>
        <TextInput placeholderTextColor={COLORS.white} placeholder="Update Description"   value={textInputDescription} onChangeText={text=>setTextInputDescription(text)}/>
      </View>
      <TouchableOpacity onPress={update}>
        <View style={styles.iconContainer}>
        {/* <Icon name="add" color="white" size={30} /> */}
        <Text>Update</Text>
      
        </View>
       </TouchableOpacity>
       </View>
       </SafeAreaView>
    );
  }
  