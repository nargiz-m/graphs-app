import { configureStore } from '@reduxjs/toolkit';
import columnsSlice from './columnsSlice';

export default configureStore({
    reducer: {
        columnsEditor: columnsSlice,
    }
})

