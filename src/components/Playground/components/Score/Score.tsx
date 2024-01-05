import styles from "./Score.module.css"

import { useAppSelector } from "../../../../app/hooks"
import { TypographyHeader, TypographyText } from "../../../UI"
import { Stack, Chip } from "@mui/material"

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
      <TypographyHeader>Score</TypographyHeader>
      <TypographyText>
        On error, the "Consecutive successful hits" value is reset to zero
      </TypographyText>
      <Stack direction="row" spacing={1}>
        <Chip
          className={styles.chipSuccess}
          label={
            <>
              Errors: <span className={styles.score}>{totalUnsuccessful}</span>
            </>
          }
          variant="outlined"
        />
        <Chip
          className={styles.chipUnsuccess}
          label={
            <>
              Success: <span className={styles.score}>{totalSuccessful}</span>
            </>
          }
          variant="outlined"
        />
      </Stack>
    </div>
  )
}

export default Score
