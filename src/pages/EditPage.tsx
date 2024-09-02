import TasksForm from "@/components/tasks/TasksForm";

function EditTask() {
  return (
    <main className="mx-auto my-10 flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold">Tasks</h1>
        <TasksForm />
    </main>
  );
}

export default EditTask;
