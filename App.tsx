import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";
import AddTodoScreen from "./screens/AddTodoScreen"
import UpdateTodoScreen from "./screens/UpdateTodoScreen"
import {todoContext} from './contexts/todoContext';
import {navigationRef} from './rootNavigation'


const Stack = createNativeStackNavigator();
const App = () => {
  const [todoList, setTodoList]=React.useState([{"completed": false, "day": "Today", "id": "6fb7ba47-4531-4f2a-a28e-ce3287ae4089", "task": "Dinner "}, {"completed": false, "day": "Tomorrow ", "id": "28f148ae-aabc-4ec2-ab88-8b9e089d9fc4", "task": "Cycle "}, {"completed": false, "day": "Today", "id": "200cae01-a29e-47f7-881c-92e52feb501a", "task": "Lunch "}]);
  return (
    <todoContext.Provider value={[todoList,setTodoList]}>
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen name="AddTodoScreen" component={AddTodoScreen} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="UpdateTodoScreen" component={UpdateTodoScreen} />


      </Stack.Navigator>
    </NavigationContainer>
    </todoContext.Provider>
  );
};


export default App
