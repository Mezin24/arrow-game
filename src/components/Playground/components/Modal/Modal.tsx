import { Modal as MUIModal } from "@mui/material"
import { useCallback } from "react"
import { useAppDispatch } from "../../../../app/hooks"
import { Button } from "../../../UI"
import { resetStore } from "../../store/slices"
import ResultMessage from "./components/ResultMessage"
import styles from "./Modal.module.css"
import cn from "classnames"

export interface IModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  isEndGameSuccess: boolean
}

const Modal = (props: IModalProps) => {
  const { isEndGameSuccess, setIsModalOpen } = props
  const dispatch = useAppDispatch()

  const handleClose = useCallback(() => {
    setIsModalOpen(false)
    dispatch(resetStore())
  }, [dispatch, setIsModalOpen])

  return (
    <MUIModal open onClose={handleClose} className={styles.wrapper}>
      <div
        className={cn(
          styles.container,
          isEndGameSuccess ? styles.modalSuccess : styles.modalUnsuccess,
        )}
      >
        <ResultMessage isEndGameSuccess={isEndGameSuccess} />
        <Button className={styles.button} onClick={handleClose}>
          Play Again
        </Button>
      </div>
    </MUIModal>
  )
}

export default Modal
