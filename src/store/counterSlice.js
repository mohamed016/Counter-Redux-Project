import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    flag: true
  },
  reducers: {
    increment: state => {
      console.log(++state.value)
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    hideAndShow: (state) => {
      state.flag = !state.flag
    }
  }

})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, hideAndShow } = counterSlice.actions

export default counterSlice.reducer