import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserType {
    userName: string, name: string, password: string, email: string
}

export interface IUserState{
    data: IUserType[]
    status: 'idle' | 'loading' | 'failed'
}

const initialState: IUserState = {
    data: [],
    status: 'idle'
}

const userSlice = createSlice({
	name: 'userSlice',
    initialState,
    reducers:{
        joinRequest(state: IUserState, _payload){
            state.status = 'loading';
            
        },
        joinSuccess(state: IUserState, {payload}){
            state.status = 'idle'
            state.data = [...state.data, payload]
            alert(`진행 : 회원가입 데이터 ${state.data}`)
        },
        joinFailure(state: IUserState, {payload}){
            state.status = 'failed'
            state.data = payload
        },
        loginRequest(state: IUserState, _payload){
            state.status = 'loading';
            
        },
        loginSuccess(state: IUserState, {payload}){
            state.status = 'idle'
            state.data = [...state.data, payload]
            alert(`진행 : 회원가입 데이터 ${state.data}`)
        },
        loginFailure(state: IUserState, {payload}){
            state.status = 'failed'
            state.data = payload
        },
        updateRequest(state: IUserState, _payload){
            state.status = 'loading';
            
        },
        updateSuccess(state: IUserState, {payload}){
            state.status = 'idle'
            state.data = [...state.data, payload]
            alert(`진행 : 회원가입 데이터 ${state.data}`)
        },
        updateFailure(state: IUserState, {payload}){
            state.status = 'failed'
            state.data = payload
        },
        findAllRequest(state: IUserState, _payload){
            state.status = 'loading';
            
        },
        findAllSuccess(state: IUserState, {payload}){
            state.status = 'idle'
            state.data = [...state.data, payload]
            alert(`진행 : 회원가입 데이터 ${state.data}`)
        },
        findAllFailure(state: IUserState, {payload}){
            state.status = 'failed'
            state.data = payload
        }
    }
})

export const { joinRequest, joinSuccess, joinFailure,
    loginRequest, loginSuccess, loginFailure,
    updateRequest, updateSuccess, updateFailure,
    findAllRequest, findAllSuccess, findAllFailure,

} = userSlice.actions;
export default userSlice;