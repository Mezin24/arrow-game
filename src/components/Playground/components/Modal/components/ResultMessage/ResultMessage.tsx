// import styles from "./ResultMessage.module.css"

export interface IResultMessageProps {
  isEndGameSuccess: boolean
}

const ResultMessage = (props: IResultMessageProps) => {
  const { isEndGameSuccess } = props

  return isEndGameSuccess ? (
    <span>
      Congratulation! <br /> You win this game!
    </span>
  ) : (
    <span>
      My regrets. <br /> You have lost this game.
    </span>
  )
}

export default ResultMessage
