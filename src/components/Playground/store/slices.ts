import { createSlice } from "@reduxjs/toolkit"
import { IPlayrground } from "./types"

const initialState: IPlayrground = {
  currentStep: 0,
}

const playgroundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentStep: (state) => {
      state.currentStep += 1
    },
  },
})

export const { actions: playgroundActions, reducer: playgroundReducer } =
  playgroundSlice
