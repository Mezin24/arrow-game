// import styles from "./Score.module.css"

import { useAppSelector } from "../../../../app/hooks"

export interface IScoreProps {
  //
}

const Score = (props: IScoreProps) => {
  const {} = props
  const { totalSuccessful, totalUnsuccessful } = useAppSelector(
    (state) => state.playground,
  )

  return (
    <div>
      <h3>Score</h3>
      <span>Errors: {totalUnsuccessful}</span>
      <br />
      <span>Success: {totalSuccessful}</span>
    </div>
  )
}

export default Score
