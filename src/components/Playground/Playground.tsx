import { useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import Controllers from "./components/Controllers"
import { setCurrentStep, setStep } from "./store/slices"
import { INTERVAL_TIME } from "./constants"
import RandomKeys from "./components/RandomKeys"
import KeyPressed from "./components/KeyPressed"

const Playground = () => {
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)
  const refreshTimerId = useRef<ReturnType<typeof setInterval> | null>(null)
  const { currentStep } = useAppSelector((state) => state.playground)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isTimerActive) {
      refreshTimerId.current = setInterval(() => {
        dispatch(setCurrentStep())
        dispatch(setStep())
      }, INTERVAL_TIME)
    } else {
      clearInterval(refreshTimerId.current as NodeJS.Timeout)
    }

    return () => clearInterval(refreshTimerId.current as NodeJS.Timeout)
  }, [dispatch, isTimerActive])

  return (
    <div>
      <h1>{currentStep}</h1>
      <Controllers
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />
      <RandomKeys isTimerActive={isTimerActive} />
      <KeyPressed isTimerActive={isTimerActive} />
    </div>
  )
}
export default Playground
