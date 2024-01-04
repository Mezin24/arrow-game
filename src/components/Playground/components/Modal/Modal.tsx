// import styles from "./Modal.module.css"

import { useCallback } from "react"
import { useAppDispatch } from "../../../../app/hooks"
import { resetStore } from "../../store/slices"
import ResultMessage from "./components/ResultMessage"
import { Button } from "../../../UI"

export interface IModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  isEndGameSuccess: boolean
}

const Modal = (props: IModalProps) => {
  const { isEndGameSuccess, setIsModalOpen } = props
  const dispatch = useAppDispatch()

  const handleClick = useCallback(() => {
    setIsModalOpen(false)
    dispatch(resetStore())
  }, [dispatch, setIsModalOpen])

  return (
    <div>
      <h3>Modal</h3>
      <h2>{isEndGameSuccess ? "Win" : "Lose"}</h2>
      <ResultMessage isEndGameSuccess={isEndGameSuccess} />
      <Button onClick={handleClick}>Play Again</Button>
    </div>
  )
}

export default Modal
