import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { "id": 1, "title": "Comprar comida", "detail": "Ir al supermercado y comprar carne, verduras y frutas"  },
        { "id": 2, "title": "Ir al gimnasio", "detail": "Hacer una sesión de ejercicios de 1 hora y media"  },
        { "id": 3, "title": "Llamar al doctor", "detail": "Pedir una cita para el chequeo anual de salud"  },
        { "id": 4, "title": "Estudiar para el examen", "detail": "Repasar los apuntes de la clase y hacer ejercicios de práctica"  },
        { "id": 5, "title": "Limpiar la casa", "detail": "Lavar los platos, pasar la aspiradora y limpiar los baños"  },
    ]
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        }
    }
});
  
export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;