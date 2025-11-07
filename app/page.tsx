import TaskItem from "./app/task-item";

export default function Home() {
  return (
    <main className="min-h-screen p-16 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-gray-900">
          My Task Manager
        </h1>

        <div className="space-y-4">
          <TaskItem
            title="Complete project documentation"
            description="Write comprehensive documentation for the new task manager application including setup instructions and API reference."
          />

          <TaskItem
            title="Implement user authentication"
            description="Add login and registration functionality with secure password hashing and JWT token management."
          />

          <TaskItem
            title="Design responsive mobile layout"
            description="Create mobile-friendly designs and ensure the application works seamlessly across different screen sizes."
          />

          <TaskItem
            title="Set up automated testing"
            description="Configure Jest and React Testing Library to write unit tests for components and implement continuous integration with GitHub Actions."
          />

          <TaskItem
            title="Add data persistence"
            description="Integrate a database solution like PostgreSQL or MongoDB to store tasks permanently and implement CRUD operations for task management."
          />
        </div>
      </div>
    </main>
  );
}
