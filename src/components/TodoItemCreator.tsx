import React, { useState, ChangeEvent } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../store'

const TodoItemCreator: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const addItem = () => {
    setTodoList(oldTodoList => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false
      }
    ])
    setInputValue('')
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  )
}

let id = 0
const getId = () => {
  return id++
}

export default TodoItemCreator
