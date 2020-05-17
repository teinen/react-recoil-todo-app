import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListState } from './atoms'


function TodoList() {
  const todoList = useRecoilValue(todoListState)

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      {/* <TodoItemCreator /> */}

      {todoList.map(todoItem => (
        <TodoItem item={todoItem} />
      ))}
    </>
  )
}

export default TodoList
