import React from 'react'
import { useRecoilValue } from 'recoil'
import { filteredTodoListState } from '../store'

import TodoListStats from './TodoListStats'
import TodoListFilters from './TodoListFilters'
import TodoItemCreator from './TodoItemCreator'
import TodoItem from './TodoItem'


const TodoList: React.FC = () => {
  const filteredTodoList = useRecoilValue(filteredTodoListState)

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      <ul>
        {filteredTodoList.map(todoItem => (
          <TodoItem item={todoItem} />
        ))}
      </ul>
    </>
  )
}

export default TodoList
