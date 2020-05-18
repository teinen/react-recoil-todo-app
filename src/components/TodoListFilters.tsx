import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListFilterState, TodoListFilterType } from '../store'

const TodoListFilters: React.FC = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const updateFilter = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilter(event.target.value as TodoListFilterType)
  }

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  )
}

export default TodoListFilters
