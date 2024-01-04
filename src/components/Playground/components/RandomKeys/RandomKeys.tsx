import { useAppSelector } from "../../../../app/hooks"
import RandomArrows from "./components/RandomArrows"
import WelcomeText from "./components/WelcomeText"

interface IRandomKeys {
  isTimerActive: boolean
}

const RandomKeys = (props: IRandomKeys) => {
  const { isTimerActive } = props
  const { steps } = useAppSelector((state) => state.playground)

  return (
    <div>
      <h3>RandomKeys</h3>
      {steps.length === 0 ? (
        <WelcomeText isTimerActive={isTimerActive} />
      ) : (
        <RandomArrows />
      )}
    </div>
  )
}

export default RandomKeys
