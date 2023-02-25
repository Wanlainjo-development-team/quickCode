import { createSlice } from '@reduxjs/toolkit'

export const useHeaderSlice = createSlice({
    name: 'header',
    initialState: {
        logo: 'MTN',
        text: 'MTN Nigeria',
        drawer: null,
        currentTab: 'MTN',
        currentLogo: 'MTN'
    },
    reducers: {
        setText: (state, action) => {
            state.text = action.payload
        },
        setLogo: (state, action) => {
            state.logo = action.payload
        },
        setDrawer: (state, action) => {
            state.drawer = action.payload
        },
        setCurrentTab: (state, action) => {
            state.currentTab = action.payload
        },
        setCurrentLogo: (state, action) => {
            state.currentLogo = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setText, setLogo, setDrawer, setCurrentTab, setCurrentLogo } = useHeaderSlice.actions

export default useHeaderSlice.reducer