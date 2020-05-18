import { atom, selector } from 'recoil'

export interface ITodoItem {
  id: number
  text: string
  isComplete: boolean
}

export type TodoListFilterType =
  | 'Show All'
  | 'Show Completed'
  | 'Show Uncompleted'

const todoListState = atom<ITodoItem[]>({
  key: 'todoListState',
  default: []
})

const todoListFilterState = atom<TodoListFilterType>({
  key: 'todoListFilterState',
  default: 'Show All'
})

const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const list = get(todoListState)
    const filter = get(todoListFilterState)

    switch(filter) {
      case 'Show Completed':
        return list.filter(item => item.isComplete)
      case 'Show Uncompleted':
        return list.filter(item => !item.isComplete)
      default:
        return list
    }
  }
})

export {
  todoListState,
  filteredTodoListState
}
