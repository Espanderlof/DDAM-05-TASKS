import { useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export const HomeScreen = ({route}) => {
    const todos = useSelector(state => state.todos.todos);
    //console.log(todos);
    //const  { listaTareas }  = route.params;

    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const [tasks, setTasks] = useState(todos);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => handlePress(item)}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDetail}>{item.detail}</Text>
        </TouchableOpacity>
    );
    
    const handlePress = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };
    
    const handleClose = () => {
        setSelectedItem(null);
        setModalVisible(false);
    };
    
    const renderEmpty = () => (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyMessage}>No hay tareas</Text>
        </View>
    );
    const addItem = () => {
        console.log('en add item');
    };

    return (
        <View sstyle={styles.container}>
            <FlatList
                data={todos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={renderEmpty}
            />

            {selectedItem && (
                <Modal visible={modalVisible} animationType="slide">
                    <View style={styles.modalContainer}>
                        <Text style={styles.itemTitle}>{selectedItem.title}</Text>
                        <Text style={styles.itemDetail}>{selectedItem.detail}</Text>
                        <Button title="Cerrar" onPress={handleClose} />
                    </View>
                </Modal>
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 35,
    },
    itemContainer: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    itemTitle: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    itemDetail: {
      fontSize: 14,
      color: '#999',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyMessage: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 50,
      marginBottom: 20,
    },
    addButton: {
      backgroundColor: 'blue',
      borderRadius: 5,
      paddingVertical: 10,
      margin: 20,
    },
    addButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
});