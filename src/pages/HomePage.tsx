import TasksList from "@/components/tasks/TasksList";
import {Link} from "react-router-dom"
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";

function HomePage() {
  return (
    <main className="mx-auto my-10 flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold mb-4">Lista de Tareas</h1>
      <div className="flex justify-center items-center">
        <Link to="/newTask" className="mb-8">
          <Button variant="link" size="default" className="hover:text-foreground border-dashed border text-muted-foreground">
            <CirclePlus size={20} className="mr-2" />
            Agregar tarea
          </Button>
        </Link>
      </div>
      <TasksList />
    </main>
  )
}

export default HomePage