import React, { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { ITodoItem, todoListState } from '../atoms'

type Props = {
  item: ITodoItem
}

const TodoItem: React.FC<Props> = (props: Props) => {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const index = todoList.findIndex(todo => todo.id === props.item.id)

  const editItemText = (event: ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...props.item,
      text: event.target.value
    })
    setTodoList(newList)
  }

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...props.item,
      isComplete: !props.item.isComplete
    })
    setTodoList(newList)
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index)
    setTodoList(newList)
  }

  return (
    <li>
      <input type="text" value={props.item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={props.item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>Remove</button>
    </li>
  )
}

const replaceItemAtIndex = (
  arr: ITodoItem[],
  index: number,
  newValue: ITodoItem
) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

const removeItemAtIndex = (
  arr: ITodoItem[],
  index: number
) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

export default TodoItem
