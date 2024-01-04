import { IMapArrow } from "../types"

export interface IPlaygroundSteps {
  step: number
  currentValue: keyof IMapArrow
  enteredValue: keyof IMapArrow | null
  success: null | boolean
}

export interface IPlayground {
  currentStep: number
  steps: IPlaygroundSteps[]
  totalSuccessful: number
  totalUnsuccessful: number
}
