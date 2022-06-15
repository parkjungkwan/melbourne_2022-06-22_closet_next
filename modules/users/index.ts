import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userSliceType = "slice/user";

export interface IUserState {
	value: number;
}

const initialState: IUserState = {
	value: 0
}

const userSlice = createSlice({
	initialState,
    name: userSliceType,
    reducers: {
    	increase: (state) => {
        	state.value += 1;
        },
        increaseByAmount: (state, action: PayloadAction<number>) => {
        	state.value += action.payload;
        }
    }
})

const {reducer, actions} = userSlice
export const userActions = actions
export default reducer