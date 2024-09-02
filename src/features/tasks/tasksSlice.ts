import { createSlice } from "@reduxjs/toolkit";

interface Task {
  id: number | string;
  title: string;
  description: string;
  completed: boolean;
}

export interface TasksState {
  tasks: Task[];
}

const initialState: Task[] = [
  {
    id: 1,
    title: "Tarea de ejemplo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    completed: false,
  },
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      const findTask = state.find((task) => task.id === action.payload);
      if (findTask) {
        state.splice(state.indexOf(findTask), 1);
      }
    },
    editTask: (state, action) => {
      const findTask = state.find((task) => task.id === action.payload.id);
      if (findTask) {
        findTask.title = action.payload.title;
        findTask.description = action.payload.description;
        findTask.completed = action.payload.completed;
      }
    },
    taskCompleted: (state, action) => {
      const findTask = state.find((task) => task.id === action.payload);
      if (findTask) {
        findTask.completed = true;
      }
    },
    taskIncompleted: (state, action) => {
      const findTask = state.find((task) => task.id === action.payload);
      if (findTask) {
        findTask.completed = false;
      }
    },
  },
});

export const { addTask, deleteTask, editTask,taskCompleted, taskIncompleted } = tasksSlice.actions;

export default tasksSlice.reducer;
