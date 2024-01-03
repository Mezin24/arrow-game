import { createSlice } from "@reduxjs/toolkit"
import { IPlayground } from "./types"
import { ArrArrowKeys } from "../constants"
import { IMapArrow } from "../types"

const initialState: IPlayground = {
  currentStep: 0,
  steps: [],
}

const playgroundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentStep: (state) => {
      state.currentStep += 1
    },
    setStep: (state) => {
      const randomNumber = Math.floor(Math.random() * ArrArrowKeys.length)
      state.steps.push({
        currentValue: ArrArrowKeys[randomNumber] as keyof IMapArrow,
      })
    },
  },
})

export const { setCurrentStep, setStep } = playgroundSlice.actions

export const { reducer: playgroundReducer } = playgroundSlice
