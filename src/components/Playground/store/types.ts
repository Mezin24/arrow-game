import { IMapArrow } from "../types"

export interface IPlaygroundSteps {
  currentValue: keyof IMapArrow
}

export interface IPlayground {
  currentStep: number
  steps: IPlaygroundSteps[]
}
