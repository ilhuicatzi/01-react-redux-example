import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addTask, editTask } from "@/features/tasks/tasksSlice";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  Form,
  FormControl,
  FormMessage,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { v4 as uuid } from "uuid";
import { useSelector } from "react-redux";
import type { TasksState } from "../../features/tasks/tasksSlice";

const FormSchema = z.object({
  id: z.string().default(() => uuid()),
  title: z.string().min(2, {
    message: "El título debe tener al menos 2 caracteres",
  }),
  description: z.string().optional(),
  completed: z.boolean().default(false).optional(),
});

function TasksForm() {
  const { id } = useParams();
  const tasks = useSelector((state: TasksState) => state.tasks);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      description: "",
      completed: false,
    },
  });

  useEffect(() => {
    if (id) {
      const task = tasks.find((task) => task.id === String(id));
      if (task) {
        console.log(task);
        form.reset({ ...task, id: String(task.id) });
      }
    }
  }, [id, tasks, form]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    if(id){
      dispatch(editTask(data));
    }else{
      dispatch(addTask(data));
    }
    navigate("/");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 max-w-md px-4"
      >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Título</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descripción</FormLabel>
                <FormControl>
                  <Textarea rows={2} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="completed"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center gap-3">
                <FormLabel className="mt-1">completed</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" size="sm">
            {id ? "Editar" : "Agregar"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default TasksForm;
