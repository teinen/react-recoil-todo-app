import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListState } from '../store'

import TodoListFilters from './TodoListFilters'
import TodoItemCreator from './TodoItemCreator'
import TodoItem from './TodoItem'


const TodoList: React.FC = () => {
  const todoList = useRecoilValue(todoListState)

  return (
    <>
      {/* <TodoListStats /> */}
      <TodoListFilters />
      <TodoItemCreator />

      <ul>
        {todoList.map(todoItem => (
          <TodoItem item={todoItem} />
        ))}
      </ul>
    </>
  )
}

export default TodoList
