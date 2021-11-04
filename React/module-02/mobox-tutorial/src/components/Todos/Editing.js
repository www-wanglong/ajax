import { useEffect, useRef } from "react"

function Editing ({ todo }) {
  const { title, isEditing, modifyTodoTitle } = todo
  const ref = useRef(null)
  useEffect(() => {
    if (isEditing) {
      ref.current.focus()
    }
  })

  return (
    <input
      ref={ref}
      className="edit"
      defaultValue={title}
      onBlur={() => modifyTodoTitle(ref.current.value)}
    />
  )
}

export default Editing