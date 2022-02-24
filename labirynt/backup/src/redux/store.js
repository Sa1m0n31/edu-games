import { configureStore } from '@reduxjs/toolkit'
import loggedUserInfo from './loggedUserInfo'

export const store = configureStore({
  reducer: {
    userInfo : loggedUserInfo
  },
})