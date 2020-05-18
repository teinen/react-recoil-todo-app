import React from 'react'
import { useRecoilValue } from 'recoil'
import TodoItemCreator from './TodoItemCreator'
import TodoItem from './TodoItem'
import { todoListState } from '../atoms'


const TodoList: React.FC = () => {
  const todoList = useRecoilValue(todoListState)

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
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
