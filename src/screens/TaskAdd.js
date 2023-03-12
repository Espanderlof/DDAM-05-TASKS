import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todosReducer";
import { useNavigation } from "@react-navigation/native";

export const TaskAdd = ({navigation}) => {
    //console.log(navigation);

    const [titulo, setTitulo] = useState('');
    const [detalle, setDetalle] = useState('');
    const dispatch = useDispatch();
    //const navigation = useNavigation();

    const agregarTarea = () => {
        dispatch(addTodo({
            id: Date.now(),
            title: titulo,
            detail: detalle
        }));
        setTitulo('');
        setDetalle('');
        navigation.navigate('Tasks');
    }

    return (
        <View style={{ flex: 1, padding: 5 }}>
            <TextInput
            placeholder="Título"
            value={titulo}
            onChangeText={setTitulo}
            style={{ fontSize: 18, padding: 10, borderWidth: 1, borderRadius: 5  }}
            />
            <TextInput
            placeholder="Detalle"
            value={detalle}
            onChangeText={setDetalle}
            style={{ fontSize: 18, padding: 10, borderWidth: 1, borderRadius: 5, marginTop: 10 }}
            />
            <TouchableOpacity
            style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 10 }}
            onPress={agregarTarea}
            >
                <Text style={{ color: 'white', fontSize: 18 }}>Agregar Tarea</Text>
            </TouchableOpacity>
        </View>
    )
}