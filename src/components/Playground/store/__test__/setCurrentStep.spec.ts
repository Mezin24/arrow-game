import { playgroundReducer, initialState, setCurrentStep } from "../slices"

describe("setCurrentStep", () => {
  it("check setCurrentStep", () => {
    const setCurrentStepState = playgroundReducer(initialState, setCurrentStep)

    expect(initialState.currentStep).toBe(0)
    expect(setCurrentStepState.currentStep).toBe(1)
  })
})
