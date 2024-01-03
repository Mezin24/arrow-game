import { useAppSelector } from "../../../../app/hooks"
import { MapArrows } from "../../constants"
import { IMapArrow } from "../../types"

export const useKeyPressElement = () => {
  const { steps, currentStep } = useAppSelector((state) => state.playground)

  if (steps.length && steps[currentStep - 1].enteredValue) {
    return MapArrows[steps[currentStep - 1].enteredValue as keyof IMapArrow]
  }

  return "⌛"
}
