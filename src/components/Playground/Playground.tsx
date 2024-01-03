import { useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import Controllers from "./components/Controllers"
import { playgroundActions } from "./store/slices"
import { INTERVAL_TIME } from "./constants"

const Playground = () => {
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)
  const refreshTimerId = useRef<ReturnType<typeof setInterval> | null>(null)
  const { currentStep } = useAppSelector((state) => state.playground)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isTimerActive) {
      refreshTimerId.current = setInterval(() => {
        dispatch(playgroundActions.setCurrentStep())
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
    </div>
  )
}
export default Playground
