import { useSelector } from "react-redux"
import type { TasksState } from "../../features/tasks/tasksSlice"
import { Card, CardContent, CardDescription, CardTitle, CardHeader, CardFooter  } from "../ui/card"
import { Switch } from "../ui/switch"
import { Button } from "../ui/button"
import { useDispatch } from "react-redux"
import { deleteTask } from "../../features/tasks/tasksSlice"

function TasksList() {
    const dispatch = useDispatch()
    const tasks = useSelector((state: TasksState) => state.tasks)
    console.log(tasks)

    const handleDelete = (id: number) => {
        dispatch(deleteTask(id))
    }
  return (
    <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {tasks.map((task) => (
        <Card key={task.id} className="w-72">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
            <span className="font-bold text-xl">{task.title}</span>
            <Switch checked={task.completed} />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{task.description}</CardDescription>
          </CardContent>
          <CardFooter className="flex justify-between items-center ">
            <Button variant="secondary" size="sm" className="w-20">Edit</Button>
            <Button 
            onClick={() => handleDelete(task.id)}
            variant="destructive" size="sm" className="w-20">Delete</Button>
          </CardFooter>
        </Card>
        ))}
    </div>
  )
}

export default TasksList