import TasksList from "@/components/tasks/TasksList"

function HomePage() {
  return (
    <main className="mx-auto my-10 flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold">Tasks</h1>
      <TasksList />
    </main>
  )
}

export default HomePage