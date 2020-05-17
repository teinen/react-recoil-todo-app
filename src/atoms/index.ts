import { atom } from 'recoil'

export interface TodoItem {
  id: number
  text: string
  isComplete: boolean
}

const todoListState = atom<TodoItem[]>({
  key: 'todoListState',
  default: []
})

export {
  todoListState
}
