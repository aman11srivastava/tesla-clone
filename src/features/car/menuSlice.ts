import {createSlice} from "@reduxjs/toolkit";

const menuState = {
    menu: ["Existing Inventory", "Used Inventory", "Trade-In", "Cybertruck", "Roadster", "Semi", "Charging", "Powerwall", "Commercial Energy", "Utilities", "Test Drive", "Find Us", "Support", "India"]
}

const menuSlice = createSlice({
    name: 'menu',
    initialState: menuState,
    reducers: {}
})

export const selectMenu = (state: any) => state.menu.menu

export default menuSlice.reducer
