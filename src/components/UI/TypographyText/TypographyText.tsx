import styles from "./TypographyText.module.css"
import { Typography, TypographyProps } from "@mui/material"
import cn from "classnames"

export interface ITypographyTextProps extends TypographyProps {
  //
}

const TypographyText = (props: ITypographyTextProps) => {
  const { children, className = "" } = props

  return (
    <Typography {...props} className={cn(styles.text, className)}>
      {children}
    </Typography>
  )
}

export default TypographyText
