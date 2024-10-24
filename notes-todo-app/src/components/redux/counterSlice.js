import {createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0,
    },
    reducers:{

        incrementC: (state,action)=>{
            state.value+= action.payload;
        },
        decrementC:(state,action)=>{
            state.value -=action.payload
        },
        updateC:(state,action) =>{
            state.value = action.payload
        }

    }
})

export const CountAction = counterSlice.actions;
export default counterSlice.reducer;