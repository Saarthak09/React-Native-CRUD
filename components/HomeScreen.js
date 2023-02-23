// import React from "react";
// import { Button, View, Text } from "react-native";

// export default function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to About"
//         onPress={() => navigation.navigate("About")}
//       />
//     </View>
//   );
// }


import React from "react";
import { Button, View, Text } from "react-native";
import ListScreen from './ListScreen'

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
   
      <Button 
        title="Todos"
        onPress={() => navigation.navigate('ListScreen')}
      />
     
        <Button
        title="Add"
        onPress={() => navigation.navigate("AddTodoScreen")}
      />
    </View>
  );
}