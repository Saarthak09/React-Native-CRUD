import React from "react";
import { Button, View, Text, StyleSheet, Pressable } from "react-native";
import ListScreen from './ListScreen'
import { styles } from "../styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
   
      <Button style={styles.btn} 
        title="Todos"
        onPress={() => navigation.navigate('ListScreen')}
      />
        <Button style={styles.btn}
        title="Add"
        onPress={() => navigation.navigate("AddTodoScreen")}
      />
    </View>
  );
}


