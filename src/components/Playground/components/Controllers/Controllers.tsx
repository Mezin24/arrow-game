import { Button } from "../../../UI"
import styles from "./Controllers.module.css"
import { PlayArrow, Pause } from "@mui/icons-material"

export interface IControllersProps {
  isTimerActive: boolean
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Controllers = (props: IControllersProps) => {
  const { isTimerActive, setIsTimerActive } = props

  return (
    <div>
      <Button
        className={styles.button}
        onClick={() => setIsTimerActive(true)}
        disabled={isTimerActive}
        endIcon={<PlayArrow />}
      >
        Play
      </Button>
      <Button
        className={styles.button}
        onClick={() => setIsTimerActive(false)}
        disabled={!isTimerActive}
        endIcon={<Pause />}
      >
        Pause
      </Button>
    </div>
  )
}

export default Controllers
