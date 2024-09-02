

function AboutPage() {
  return (
    <main className="mx-auto my-10 flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="text-lg text-center">
        This is a simple task manager app built with React, Redux Toolkit, and Tailwind CSS.
      </p>
      <p className="text-lg text-center mt-4 mb-6">
          You can check the source code on <a href="https://github.com/ilhuicatzi/todo-app_react-redux" target="_blank" className="text-blue-500">GitHub</a>.
        </p>
      <div>
        <p>
          <a href="mailto:g.ilhuicatzi@gmail.com" className="text-blue-500"> g.ilhuicatzi@gmail.com</a>
        </p>
      </div>
    </main>
  )
}

export default AboutPage