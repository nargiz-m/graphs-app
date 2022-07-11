import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const columnsSlice = createSlice({
    name: 'columnsEditor',
    initialState: {
        columns: [],
    },
    reducers: {
        create : (state, action) => {
            state.columns = action.payload;
        },
        addColumn : (state, action) => {
            state.columns.push({id: uuidv4(), name: '', height: 0, color: ''});
        },
        updateColumn : (state, action) => {
            const updatedElementIndex = state.columns.findIndex(col => col.id === action.payload.id);
            state.columns[updatedElementIndex] = action.payload;
        },
        deleteColumn : (state, action) => {
            const deletedElementIndex = state.columns.findIndex(col => col.id === action.payload.id);
            state.columns.splice(deletedElementIndex, 1);
        },
    },
})

export const { create, addColumn, updateColumn, deleteColumn } = columnsSlice.actions;
const {reducer} = columnsSlice;
export default reducer;