import { IMapArrow } from "../types"

export interface IPlaygroundSteps {
  currentValue: keyof IMapArrow
  enteredValue: keyof IMapArrow | null
}

export interface IPlayground {
  currentStep: number
  steps: IPlaygroundSteps[]
}
