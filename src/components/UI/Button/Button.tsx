import styles from "./Button.module.css"
import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from "@mui/material"
import cn from "classnames"

export interface IButtonProps extends MUIButtonProps {
  //
}

const Button = (props: IButtonProps) => {
  const { children, className } = props

  return (
    <MUIButton
      variant="contained"
      size="small"
      {...props}
      className={cn(styles.button, className)}
    >
      {children}
    </MUIButton>
  )
}

export default Button
