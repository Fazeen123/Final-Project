import {configureStore} from '@reduxjs/toolkit'
import CartSliceReducer from './Slices/CartSlice'

export const Store =configureStore({
    reducer:{
        AddItem:CartSliceReducer
    }
})

export default Store