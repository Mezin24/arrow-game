import { createSlice } from "@reduxjs/toolkit"
import { IPlayground } from "./types"
import { ArrArrowKeys } from "../constants"
import { IMapArrow } from "../types"

export const initialState: IPlayground = {
  currentStep: 0,
  steps: [],
  totalSuccessful: 0,
  totalUnsuccessful: 0,
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
        enteredValue: null,
        step: state.currentStep,
        success: null,
      })
    },
    setEnteredValue: (state, action) => {
      if (state.steps.length) {
        const step = state.steps[state.currentStep - 1]
        if (step.enteredValue) return

        const success = step.currentValue === action.payload
        state.steps[state.currentStep - 1] = {
          ...step,
          enteredValue: action.payload,
          success,
        }
        if (success) {
          state.totalSuccessful += 1
        } else {
          state.totalUnsuccessful += 1
          state.totalSuccessful = 0
        }
      }
    },
    setUnsuccess: (state) => {
      if (state.steps.length) {
        const step = state.steps[state.currentStep - 1]
        if (step.enteredValue) return

        state.steps[state.currentStep - 1] = {
          ...step,
          success: false,
        }
        state.totalUnsuccessful += 1
        state.totalSuccessful = 0
      }
    },

    resetStore: () => initialState,
  },
})

export const {
  setCurrentStep,
  setStep,
  setEnteredValue,
  setUnsuccess,
  resetStore,
} = playgroundSlice.actions

export const { reducer: playgroundReducer } = playgroundSlice
