import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Ellipsis, Trash2, Pencil, CircleCheck, CircleX } from "lucide-react";
import { useDispatch } from "react-redux";
import { deleteTask, taskCompleted, taskIncompleted } from "../../features/tasks/tasksSlice";
import { useNavigate } from "react-router-dom";


function ActionsDropMenu({ id }: { id: number | string }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDelete = (id: number | string) => {
        dispatch(deleteTask(id));
      };

    const handleEdit = (id: number | string) => {
        navigate(`/editTask/${id}`);
    }
    const handleCompleted = (id: number | string) => {
        dispatch(taskCompleted(id));
    }

    const handleIncompleted = (id: number | string) => {
        dispatch(taskIncompleted(id));
    }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Ellipsis size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
        <DropdownMenuItem onClick={()=> handleEdit(id)}>
          <Pencil size={16} className="mr-2" />
          Editar
        </DropdownMenuItem>
        <DropdownMenuItem onClick={()=>handleDelete(id)}>
          <Trash2 size={16} className="mr-2" />
          Eliminar
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={()=>handleCompleted(id)}>
          <CircleCheck size={16} className="mr-2" />
          Marcar como completado
        </DropdownMenuItem>
        <DropdownMenuItem onClick={()=>handleIncompleted(id)}>
          <CircleX size={16} className="mr-2" />
          Marcar como incompleto
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ActionsDropMenu;
