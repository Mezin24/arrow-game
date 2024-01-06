import {
  playgroundReducer,
  initialState,
  setStep,
  setCurrentStep,
} from "../slices"

describe("setStep", () => {
  it("check setStep", () => {
    const setCurrentStepState = playgroundReducer(initialState, setCurrentStep)
    const setStepState = playgroundReducer(setCurrentStepState, setStep)
    const firstStep = {
      currentValue: setStepState.steps[0].currentValue,
      enteredValue: null,
      step: 1,
      success: null,
    }

    expect(initialState.steps).length(0)
    expect(setStepState.steps).length(1)
    expect(setStepState.steps[0]).toEqual(firstStep)
  })
})
