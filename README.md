# Example React Redux Todo-App

This is a simple example of a Todo-App using React and Redux.

## Documentation

```bash
https://redux-toolkit.js.org/tutorials/quick-start

```

## Installation

```bash
npm install @reduxjs/toolkit react-redux
```


## Usage

### Step 1: Create a Store

Create a file named src/app/store.js. Import the configureStore function from @reduxjs/toolkit and create a store with the rootReducer.

```javascript
import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '@/features/tasks/tasksSlice'

export const store = configureStore({
    reducer: {
        tasks: tasksReducer
    }
})

export default store
```

### Step 2: Added Provider

Wrap the App component with the Provider component from react-redux and pass the store as a prop.

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

### Step 3: Create a Slice
Add a new file named src/features/tasks/tasksSlice.js and create a slice with the tasksReducer.

```javascript
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

```


### Step 4: Create a Component

Create a new file named src/components/tasks/... and create a component that will display the tasks.

For example:

```javascript
import { useDispatch } from "react-redux";
import { deleteTask, taskCompleted, taskIncompleted } from "../../features/tasks/tasksSlice";

function Task({ task }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleCompleted = () => {
    dispatch(taskCompleted(task.id));
  };

  const handleIncompleted = () => {
    dispatch(taskIncompleted(task.id));
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleDelete}>Delete</button>
      {task.completed ? (
        <button onClick={handleIncompleted}>Incompleted</button>
      ) : (
        <button onClick={handleCompleted}>Completed</button>
      )}
    </div>
  );
}
```

## Author
g.ilhuicatzi@gmail.com