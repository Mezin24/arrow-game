import styles from "./KeyPressed.module.css"

import { useCallback, useEffect } from "react"
import { ArrArrowKeys, MapArrows } from "../../constants"
import { IMapArrow } from "../../types"
import { useAppDispatch } from "../../../../app/hooks"
import { setEnteredValue } from "../../store/slices"
import { useKeyPressElement } from "./hooks"
import { TypographyHeader, TypographyText } from "../../../UI"

export interface IKeyPressedProps {
  isTimerActive: boolean
}

const KeyPressed = (props: IKeyPressedProps) => {
  const { isTimerActive } = props
  const dispatch = useAppDispatch()
  const keyPressElement = useKeyPressElement()

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (ArrArrowKeys.includes(e.key) && isTimerActive) {
        dispatch(setEnteredValue(e.key))
      }
    },
    [dispatch, isTimerActive],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress)

    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [handleKeyPress])

  return (
    <div className={styles.wrapper}>
      <TypographyHeader>KeyPressed</TypographyHeader>
      <div className={styles.container}>
        <TypographyText>
          Press the key corresponding to the key in "Random keys"
        </TypographyText>
        <span className={styles.icon}>{keyPressElement}</span>
      </div>
    </div>
  )
}

export default KeyPressed
