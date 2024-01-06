import {
  initialState,
  playgroundReducer,
  resetStore,
  setCurrentStep,
  setStep,
  setUnsuccess,
} from "../slices"

describe("reducer resetStore", () => {
  it("check reset store", () => {
    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )
    const setStepState = playgroundReducer(setCurrentStepState, setStep())
    const setUnsuccessState = playgroundReducer(setStepState, setUnsuccess())
    const resetStoreState = playgroundReducer(setUnsuccessState, resetStore())
    expect(resetStoreState).toEqual(initialState)
  })
})
