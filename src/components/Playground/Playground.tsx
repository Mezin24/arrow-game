import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { playgroundActions } from "./store/slices"

const Playground = () => {
  const { currentStep } = useAppSelector((state) => state.playground)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h1>{currentStep}</h1>
      <button onClick={() => dispatch(playgroundActions.setCurrentStep())}>
        Increase
      </button>
    </div>
  )
}
export default Playground
