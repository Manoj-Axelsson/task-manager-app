"use client";

import { useState } from "react";

import TaskItem from "./app/task-item";

export default function Home() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete project documentation",
      description:
        "Write comprehensive documentation for the new task manager application including setup instructions and API reference.",
    },
    {
      id: 2,
      title: "Implement user authentication",
      description:
        "Add login and registration functionality with secure password hashing and JWT token management.",
    },
    {
      id: 3,
      title: "Design responsive mobile layout",
      description:
        "Create mobile-friendly designs and ensure the application works seamlessly across different screen sizes.",
    },
    {
      id: 4,
      title: "Set up automated testing",
      description:
        "Configure Jest and React Testing Library to write unit tests for components and implement continuous integration with GitHub Actions.",
    },
    {
      id: 5,
      title: "Add data persistence",
      description:
        "Integrate a database solution like PostgreSQL or MongoDB to store tasks permanently and implement CRUD operations for task management.",
    },
  ]);

  return (
    <main className="min-h-screen p-16 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-gray-900">
          My Task Manager
        </h1>

        <div className="space-y-4">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              title={task.title}
              description={task.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
