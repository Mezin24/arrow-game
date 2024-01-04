import styles from "./RandomArrows.module.css"

import { useCallback } from "react"
import { useAppSelector } from "../../../../../../app/hooks"
import { MapArrows } from "../../../../constants"
import { IPlaygroundSteps } from "../../../../store/types"
import { IMapArrow } from "../../../../types"

const RandomArrows: React.FC = () => {
  const { steps } = useAppSelector((state) => state.playground)

  const getResultClass = useCallback((step: IPlaygroundSteps): string => {
    if (step.success) {
      return styles.isSuccess
    }

    if (!step.success && step.success !== null) {
      return styles.isUnsuccess
    }

    return styles.icon
  }, [])
  return steps.map((step, index) => (
    <span key={index} className={getResultClass(step)}>
      {MapArrows[step.currentValue as keyof IMapArrow]}
    </span>
  ))
}

export default RandomArrows
