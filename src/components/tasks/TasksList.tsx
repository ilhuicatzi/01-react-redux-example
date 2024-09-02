import { useSelector } from "react-redux";
import type { TasksState } from "../../features/tasks/tasksSlice";
import { Card} from "../ui/card";
import { CircleCheck, CircleX } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ActionsDropMenu from "./ActionsDropMenu";

function TasksList() {
  
  const tasks = useSelector((state: TasksState) => state.tasks);
  console.log(tasks);
  
  return (
    <Card>
      <Table className="w-full max-w-2xl">
        <TableHeader>
          <TableRow>
            <TableHead className="w-24 hidden min-[320px]:table-cell">Id</TableHead>
            <TableHead>Título</TableHead>
            <TableHead className="w-52 hidden sm:table-cell">Descripción</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell className="hidden min-[320px]:table-cell">
                <p className="w-full max-w-20 truncate mr-4 font-mono "> {task.id} </p>
                </TableCell>
              <TableCell>
                <p className="font-semibold flex truncate w-32">{task.title}</p>
                </TableCell>
              <TableCell className="w-full max-w-xs hidden sm:table-cell">
                <p className="truncate my-1.5 mr-3">{task.description}</p>
              </TableCell>
              <TableCell>
                <p className="flex justify-center w-full">
                {task.completed ? (<CircleCheck size={20} className="text-green-500" />) : (<CircleX size={20} className="text-red-500" />)}
                </p>
              </TableCell>
              <TableCell className="text-center">
                <ActionsDropMenu id={task.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

export default TasksList;
