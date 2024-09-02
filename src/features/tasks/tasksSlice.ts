import { createSlice } from '@reduxjs/toolkit'

 interface Task {
    id: number
    title: string
    description: string
    completed: boolean
  }

  export interface TasksState {
    tasks: Task[]
  }


  const initialState: Task[] = [
    { id: 1, title: 'Task 1', description: 'Description 1', completed: false },
    { id: 2, title: 'Task 2', description: 'Description 2', completed: true },
    { id: 3, title: 'Task 3', description: 'Description 3', completed: false }
  ]


export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
      addTask: (state, action) => {
          state.push(action.payload)
      },
      deleteTask: (state, action) => {
          const findTask = state.find(task => task.id === action.payload)
          if(findTask){
              state.splice(state.indexOf(findTask), 1)
          }
      }
  }
})

export const { addTask, deleteTask } = tasksSlice.actions

export default tasksSlice.reducer