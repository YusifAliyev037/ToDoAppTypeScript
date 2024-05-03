import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface TodoItem {
    id:number;
    title:string
}

interface TodoState {
    todo:TodoItem[]
}

const initialState: TodoState = {
    todo:[]
}
console.log(initialState);

const todoSlice = createSlice({
    name:"todoSlice",
    initialState,
    reducers:{

        fillToDo:(state, action:PayloadAction<TodoItem[]>) => {
            state.todo = [...action.payload]
        },

        addTodo:(state, action:PayloadAction<TodoItem>)=>{
            state.todo = [action.payload, ...state.todo ]
            
        },

        rmvTodo:(state, action:PayloadAction<TodoItem["id"]>)=>{

            const newToDo = state.todo.filter((item) => item.id !== action.payload)
            state.todo = newToDo
        },
       
    }
})


export const {fillToDo, addTodo,rmvTodo} = todoSlice.actions


export default todoSlice.reducer