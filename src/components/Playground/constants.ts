import { IEnd_Game_Options, IMapArrow } from "./types"

export const INTERVAL_TIME = 1000

export const MapArrows: IMapArrow = {
  ArrowDown: "⬇️",
  ArrowUp: "⬆️",
  ArrowLeft: "⬅️",
  ArrowRight: "➡️",
}

export const ArrArrowKeys = Object.keys(MapArrows)
export const END_GAME_OPTIONS: IEnd_Game_Options = {
  SUCCESS_END: 3,
  UNSUCCESS_END: 3,
}
