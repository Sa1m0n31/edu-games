import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: '',
  role: '',
}

export const loggedUserInfo = createSlice({

    name: 'userInfo',
    initialState,
    reducers: {
        setInfo: (state, action) => {
            state.username = action.payload.username;
            state.role = action.payload.role;
        }
    }
})

export const { setInfo } = loggedUserInfo.actions

export default loggedUserInfo.reducer