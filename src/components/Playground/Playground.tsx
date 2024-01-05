import { useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import Controllers from "./components/Controllers"
import { setCurrentStep, setStep, setUnsuccess } from "./store/slices"
import { END_GAME_OPTIONS, INTERVAL_TIME } from "./constants"
import RandomKeys from "./components/RandomKeys"
import KeyPressed from "./components/KeyPressed"
import Score from "./components/Score"
import Modal from "./components/Modal"
import Description from "./components/Description"
import styles from "./Playground.module.css"

const Playground = () => {
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isEndGameSuccess, setIsEndGameSuccess] = useState<boolean>(false)

  const refreshTimerId = useRef<ReturnType<typeof setInterval> | null>(null)
  const { currentStep, totalSuccessful, totalUnsuccessful } = useAppSelector(
    (state) => state.playground,
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isTimerActive) {
      refreshTimerId.current = setInterval(() => {
        dispatch(setUnsuccess())
        dispatch(setCurrentStep())
        dispatch(setStep())
      }, INTERVAL_TIME)
    } else {
      clearInterval(refreshTimerId.current as NodeJS.Timeout)
    }

    return () => clearInterval(refreshTimerId.current as NodeJS.Timeout)
  }, [dispatch, isTimerActive])

  useEffect(() => {
    const isSuccess = totalSuccessful === END_GAME_OPTIONS.SUCCESS_END
    const isUnsuccess = totalUnsuccessful === END_GAME_OPTIONS.UNSUCCESS_END

    isSuccess && setIsEndGameSuccess(true)
    isUnsuccess && setIsEndGameSuccess(false)

    if (isSuccess || isUnsuccess) {
      setIsModalOpen(true)
      setIsTimerActive(false)
    }
  }, [totalSuccessful, totalUnsuccessful])

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <RandomKeys isTimerActive={isTimerActive} />
        <KeyPressed isTimerActive={isTimerActive} />
        <Score />
      </div>
      <div className={styles.column}>
        <Description />
        <Controllers
          isTimerActive={isTimerActive}
          setIsTimerActive={setIsTimerActive}
        />
      </div>
      {isModalOpen && (
        <Modal
          isEndGameSuccess={isEndGameSuccess}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  )
}
export default Playground
