import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//screens
import { HomeScreen } from "./screens/HomeScreen";
import { TaskAdd } from "./screens/TaskAdd";
import { TaskDetail } from "./screens/TaskDetail";

//icons
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';

const HomeStackNavigator = createNativeStackNavigator();
const MyStack = (props) => {
    return(
        <HomeStackNavigator.Navigator
            initialRouteName="Home"
        >
            <HomeStackNavigator.Screen
                name="Home"
                component={HomeScreen}
                initialParams={ props.route?.params }
                options={{
                    headerTitle: 'Tareas',
                }}
            />
            <HomeStackNavigator.Screen
                name="Task"
                component={TaskDetail}
                options={{
                    // headerShown: false,
                    headerBackTitleVisible: false,
                }}
            />
        </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();
const MyTabs = () => {

    // const dataLista = [
    //     { id: '1', title: 'Elemento 1', detail: 'Detalle del elemento 1' },
    //     { id: '2', title: 'Elemento 2', detail: 'Detalle del elemento 2' },
    //     { id: '3', title: 'Elemento 3', detail: 'Detalle del elemento 3' },
    // ];

    //const dataLista = [];
    // const [listaTareas, setlistaTareas] = useState(dataLista);

    return(
        <Tab.Navigator
            initialRouteName="Tasks"
            screenOptions={{
                tabBarActiveTintColor: 'purple',
            }}
        >
            <Tab.Screen 
                name="Tasks"
                component={MyStack} 
                //initialParams={{ listaTareas }}
                options={{
                    tabBarLabel: 'Tareas',
                    tabBarIcon: ({ color, size}) => (
                        <FontAwesome5 name="tasks" size={24} color={color} />
                    ),
                    //tabBarBadge: 0,
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name="AgregarTarea"
                component={TaskAdd} 
                //initialParams={{ listaTareas }}
                //component={() => <TaskAdd navigation={navigation} />}
                options={{
                    title: "Agregar Tarea",
                    tabBarLabel: 'Agregar Tarea',
                    tabBarIcon: ({ color, size}) => (
                        <MaterialIcons name="add-task" size={24} color={color} />
                    ),
                    //headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}

export const Navigator = () => {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}
