// import styles from "./KeyPressed.module.css"

import { useCallback, useEffect } from "react"
import { ArrArrowKeys, MapArrows } from "../../constants"
import { IMapArrow } from "../../types"
import { useAppDispatch } from "../../../../app/hooks"
import { setEnteredValue } from "../../store/slices"
import { useKeyPressElement } from "./hooks"

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
    <div>
      KeyPressed
      <span>{keyPressElement}</span>
    </div>
  )
}

export default KeyPressed
