import {
  playgroundReducer,
  initialState,
  setCurrentStep,
  setStep,
  setUnsuccess,
} from "../slices"

describe("reducer setUnsuccess", () => {
  it("check setUnsuccess", () => {
    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )
    const setStepState = playgroundReducer(setCurrentStepState, setStep())
    const setUnsuccessState = playgroundReducer(setStepState, setUnsuccess())

    expect(setStepState.steps[0].success).toBeNull()
    expect(setStepState.totalUnsuccessful).toBe(0)
    expect(setUnsuccessState.steps[0].success).toBe(false)
    expect(setUnsuccessState.totalUnsuccessful).toBe(1)
  })
})
