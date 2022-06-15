import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const clothesSliceType = "slice/clothes";

export interface IClothesState {
	value: number;
}

const initialState: IClothesState = {
	value: 0
}

const clothesSlice = createSlice({
	initialState,
    name: clothesSliceType,
    reducers: {
    	increase: (state) => {
        	state.value += 1;
        },
        increaseByAmount: (state, action: PayloadAction<number>) => {
        	state.value += action.payload;
        }
    }
})

export const { increase, increaseByAmount } = clothesSlice.actions;
export default clothesSlice;