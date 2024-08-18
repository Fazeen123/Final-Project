import {configureStore} from '@reduxjs/toolkit'
import CartSliceReducer from './Slices/CartSlice'
import UserDatasReducer from './Slices/UserSlice'

export const Store =configureStore({
    reducer:{
        AddItem:CartSliceReducer,
        Userdatas:UserDatasReducer
    }
})

export default Store