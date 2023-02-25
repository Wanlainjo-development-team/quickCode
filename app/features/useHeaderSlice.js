import { createSlice } from '@reduxjs/toolkit'

export const useHeaderSlice = createSlice({
    name: 'header',
    initialState: {
        logo: 'MTN',
        text: 'MTN Nigeria',
    },
    reducers: {
        setText: (state, action) => {
            state.text = action.payload
        },
        setLogo: (state, action) => {
            state.logo = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setText, setLogo } = useHeaderSlice.actions

export default useHeaderSlice.reducer