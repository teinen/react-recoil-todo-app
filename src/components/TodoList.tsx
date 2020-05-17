import React from 'react'
import { useRecoilValue } from 'recoil'
import TodoItemCreator from './TodoItemCreator'
import { todoListState } from '../atoms'


const TodoList = () => {
  const todoList = useRecoilValue(todoListState)

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {/* {todoList.map(todoItem => (
        <TodoItem item={todoItem} />
      ))} */}
    </>
  )
}

export default TodoList
