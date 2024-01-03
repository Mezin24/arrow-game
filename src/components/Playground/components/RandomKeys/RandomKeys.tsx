// import styles from "./RandomKeys.module.css"

import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { MapArrows } from "../../constants"
import { IMapArrow } from "../../types"

export interface IRandomKeysProps {
  isTimerActive: boolean
}

const RandomKeys = (props: IRandomKeysProps) => {
  const { isTimerActive } = props
  const { steps } = useAppSelector((state) => state.playground)
  const dispatch = useAppDispatch()

  return (
    <div>
      {steps.map((step, index) => (
        <span key={index}>
          {MapArrows[step.currentValue as keyof IMapArrow]}
        </span>
      ))}
    </div>
  )
}

export default RandomKeys
