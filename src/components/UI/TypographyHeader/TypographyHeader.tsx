import styles from "./TypographyHeader.module.css"
import { Typography, TypographyProps } from "@mui/material"
import cn from "classnames"

export interface ITypographyHeaderProps extends TypographyProps {
  //
}

const TypographyHeader = (props: ITypographyHeaderProps) => {
  const { children, className = "" } = props

  return (
    <Typography variant="h3" {...props} className={cn(styles.text, className)}>
      {children}
    </Typography>
  )
}

export default TypographyHeader
