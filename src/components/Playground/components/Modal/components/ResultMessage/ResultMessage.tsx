import styles from "./ResultMessage.module.css"

import { TypographyText } from "../../../../../UI"

export interface IResultMessageProps {
  isEndGameSuccess: boolean
}

const ResultMessage = (props: IResultMessageProps) => {
  const { isEndGameSuccess } = props

  return (
    <div className={styles.wrapper}>
      {isEndGameSuccess ? (
        <TypographyText className={styles.text}>
          Congratulations! <br /> You win!
        </TypographyText>
      ) : (
        <TypographyText className={styles.text}>
          My regrets. <br /> You have lost this game
        </TypographyText>
      )}
    </div>
  )
}

export default ResultMessage
