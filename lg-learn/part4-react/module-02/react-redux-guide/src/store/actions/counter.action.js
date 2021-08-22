import { DECREMENT, INCREMENT } from "../const/counter.const"

export const increment = (payload) => {
  return { type: INCREMENT, payload }
}

export const decrement = () => {
  return { type: DECREMENT }
}