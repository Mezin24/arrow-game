// import styles from "./Controllers.module.css"

export interface IControllersProps {
  isTimerActive: boolean
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Controllers = (props: IControllersProps) => {
  const { isTimerActive, setIsTimerActive } = props

  return (
    <div>
      <button onClick={() => setIsTimerActive(true)} disabled={isTimerActive}>
        Play
      </button>
      <button onClick={() => setIsTimerActive(false)} disabled={!isTimerActive}>
        Pause
      </button>
    </div>
  )
}

export default Controllers
