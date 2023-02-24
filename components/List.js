import React from 'react';
import * as RootNavigation from '../rootNavigation';
import {styles} from '../styles'
import {
  SafeAreaView,StyleSheet, View,Text,TextInput,FlatList
 
} from 'react-native';
import { TouchableOpacity } from 'react-native';



const List=({todo, deleteTodo, updateTodo, navigation})=>{
return <View>
  <View style={{flex:1}}>
  <Text style={styles.txt}> {todo.task}</Text>
  <Text style={styles.txt}> {todo.day}</Text>
<View style={{ flexDirection: 'row' , flex:1}}>
 <TouchableOpacity onPress={() => RootNavigation.navigate('UpdateTodoScreen', { id:todo.id,task:todo.task,day:todo.day })} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{"Update"}</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => deleteTodo(todo.id)} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{"Delete"}</Text>
  </TouchableOpacity>
</View>
</View>
</View>
}

export default List;

