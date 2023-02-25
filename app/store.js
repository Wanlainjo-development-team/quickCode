import { configureStore } from '@reduxjs/toolkit'
import useHeaderSlice from './features/useHeaderSlice'

export const store = configureStore({
    reducer: {
        header: useHeaderSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})