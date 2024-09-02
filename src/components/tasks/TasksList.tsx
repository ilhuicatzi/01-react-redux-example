import { useSelector } from "react-redux"
import type { TasksState } from "../../features/tasks/tasksSlice"
import { Card, CardContent, CardDescription, CardTitle, CardHeader  } from "../ui/card"
import { Switch } from "../ui/switch"

function TasksList() {
    const tasks = useSelector((state: TasksState) => state.tasks)
    console.log(tasks)
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tasks.map((task) => (
        <Card key={task.id} className="w-64">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
            <span className="font-bold">{task.title}</span>
            <Switch checked={task.completed} />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{task.description}</CardDescription>
          </CardContent>
        </Card>
        ))}
    </div>
  )
}

export default TasksList