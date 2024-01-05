import stylesCommon from "../../RandomKeys.module.css"
import styles from "./RandomArrows.module.css"

import cn from "classnames"
import { useCallback } from "react"
import { useAppSelector } from "../../../../../../app/hooks"
import { MapArrows } from "../../../../constants"
import { IPlaygroundSteps } from "../../../../store/types"
import { IMapArrow } from "../../../../types"

const RandomArrows: React.FC = () => {
  const { steps } = useAppSelector((state) => state.playground)

  const getResultClass = useCallback((step: IPlaygroundSteps): string => {
    return cn(
      step.success && step.success !== null && styles.iconSuccess,
      !step.success && step.success !== null && styles.iconUnsuccess,
      stylesCommon.icon,
    )
  }, [])

  return (
    <div className={stylesCommon.wrapper}>
      {steps.map((step, index) => (
        <span key={index} className={getResultClass(step)}>
          {MapArrows[step.currentValue as keyof IMapArrow]}
        </span>
      ))}
    </div>
  )
}

export default RandomArrows
