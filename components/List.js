import React from 'react';
import * as RootNavigation from '../rootNavigation';
import UpdateTodoScreen from '../components/UpdateTodoScreen'
// const COLORS={primary:'#1f145c',white:'#fff',black:'#000000',Green:'#00FF00',red:'#FF0000'};
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
 <TouchableOpacity onPress={() => RootNavigation.navigate('UpdateTodoScreen')} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{"Update"}</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => deleteTodo(todo.id)} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{"Delete"}</Text>
  </TouchableOpacity>
</View>
</View>
</View>
}

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  txt:{
    color:"#000000",
    placeholderTextColor:"#000000",
    textAlign:'center'
}

});

export default List;

