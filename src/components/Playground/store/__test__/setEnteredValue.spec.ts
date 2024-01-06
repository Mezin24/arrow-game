import { ArrArrowKeys } from "../../constants"
import {
  initialState,
  playgroundReducer,
  setCurrentStep,
  setEnteredValue,
  setStep,
} from "../slices"

describe("reducer setEnteredValue", () => {
  it("check setEnteredValue", () => {
    const enteredValue = ArrArrowKeys[0]
    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )
    const setStepState = playgroundReducer(setCurrentStepState, setStep())
    const setEnteredValueState = playgroundReducer(
      setStepState,
      setEnteredValue(enteredValue),
    )

    expect(setStepState.steps[0].enteredValue).toBeNull()
    expect(setEnteredValueState.steps[0].enteredValue).toBe(enteredValue)
  })

  it("check totalSuccessful and totalUnsuccessful", () => {
    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )
    const setStepState = playgroundReducer(setCurrentStepState, setStep())
    const setEnteredValueState = playgroundReducer(
      setStepState,
      setEnteredValue(setStepState.steps[0].currentValue),
    )

    expect(setStepState.totalSuccessful).toBe(0)
    expect(setStepState.totalUnsuccessful).toBe(0)
    expect(setEnteredValueState.totalSuccessful).toBe(1)
    expect(setEnteredValueState.totalUnsuccessful).toBe(0)
  })
})
