import { createSlice, isAction } from "@reduxjs/toolkit";

const initialState = {
    todoList: [],
    editedTodo: []
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.todoList = state.todoList.filter(item => item.id !== action.payload)
        },
        editTodo: (state, action) => {
            state.editedTodo = state.todoList.filter(item => item.id === action.payload)
        },
        handleCheck: (state, action) => {
            state.todoList.map(item => {
                if(item.id === action.payload){
                    if(item.done === false) item.done = true
                    else item.done = false
                }
            })
        }
    }
});

export const { addTodo,deleteTodo,editTodo,handleCheck } = todoSlice.actions

export default todoSlice.reducer
