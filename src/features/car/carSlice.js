import { createSlice} from '@reduxjs/toolkit';

const initialState = {

    cars:["Model S", "Model 3", "Model X", "Model Y"]}

const carSlice = createSlice({
 name:"car",
 initialState,
 Reducer:{}
})

export default carSlice.reducer;